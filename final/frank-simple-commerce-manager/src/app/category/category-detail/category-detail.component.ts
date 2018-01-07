import {Component, OnInit} from '@angular/core';
import {ToastsManager} from "ng2-toastr";
import {Category} from "../category.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActionMode, ScmSharedUtil} from "../../shared/scm-shared-util";
import {ActivatedRoute, Router} from "@angular/router";
import {DataStoreService} from "../../shared/data-store.service";

@Component({
  selector: 'scm-category-detail',
  templateUrl: 'category-detail.component.html',
  styleUrls: ['category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  subTitle: string;         //템플릿에서 등록, 수정 문구 바인딩
  actionMode: ActionMode;   //카테고리의 신규 생성, 수정, 조뢰를 나타내는 커스텀 타입
  categoryForm: FormGroup;  //카테고리 정보를 담을 FormGroup
  private submitted = false;

  constructor(private router: Router,             //카테고리 생성/수정 후 카테고리 목록 뷰로 이동
              private route: ActivatedRoute,      //카테고리 생세 조회 시 Resolve 가드에서 데이터 조회 및 쿼리 스트링 데이터 조회
              private database: DataStoreService, //카테고리 생성/수정 파이어베이스에 저장
              private fb: FormBuilder,            //카테고리 반응형 폼 기반으로 FormGroup 구성
              private toastr: ToastsManager) {
    this.initForm();
  }

  ngOnInit() {
    this.route.queryParams.filter(q => q['action'] !== undefined)
      .do(q => this._setActionMode(q))
      .switchMap(q => this.route.data) //todo: 이 operator는 왜 필요한가?
      .filter((data: { category: Category }) => data.category !== null) //todo: data : {} <-- 이건 무슨 의미인가??
      .map((data: { category: Category }) => data.category)
      .subscribe(cat =>
        this.actionMode === 'read' ? this.resetForm(cat) : this.categoryForm.patchValue(cat) //폼을 초기화 하거나 resolve 가드로 받은 카테고리 데이터로 폼을 갱신함
      );
  }

  canDeactivate() {
    if (this.submitted || this.categoryForm.pristine) return true;
    return confirm('저장하지 않고 돌아가면 수정사항이 반영되지 않습니다.');
  }

  submit() {
    const category: Category = this.categoryForm.value;

    if (this.actionMode === 'create') {
      const categoryFn = (no) => {
        category.no = no;
        return category;
      };
      this.database.create('category', categoryFn).subscribe(this._onSuccess(), this._onError());
      return;
    }

    category.updatedTime = ScmSharedUtil.getCurrentDateTime();
    this.database.update('category', category).then(this._onSuccess(), this._onError());
  }

  cancel() {
    this.redirectToCategoryList();
  }

  initForm() {
    this.categoryForm = this.fb.group({
      no: [0],
      name: ['', Validators.required],
      desc: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(100)])],
      isUse: [true, Validators.required],
      createdTime: [ScmSharedUtil.getCurrentDateTime()],
      updatedTime: ['']
    });
  }

  //기존의 카테고리 정보를 조회할 때는 resetForm 메서드를 호출함
  resetForm(cat: Category) {
    this.categoryForm.reset({
      no: {value: cat.no, disabled: true},
      name: {value: cat.name, disabled: true},
      desc: {value: cat.desc, disabled: true},
      isUse: {value: cat.isUse, disabled: true},
      createdTime: {value: cat.createdTime, disabled: true},
      updatedTime: {value: cat.updatedTime, disabled: true},
    });
  }

  private _setActionMode(q) {
    this.actionMode = q['action'];
    console.log("this.actionMode: " + this.actionMode);

    switch (this.actionMode) {
      case 'create':
        this.subTitle = '등록';
        break;
      case 'edit':
        this.subTitle = '수정';
        break;
      case 'read':
      default:
        this.subTitle = '조회';
    }
  }

  private redirectToCategoryList() {
    this.router.navigate(['category-list']);
  }

  private _onSuccess() {
    return () => {
      this.toastr.success(`카테고리 ${this.subTitle} 완료`, '[카테고리 관리]');
      this.submitted = true;
      this.redirectToCategoryList();
    };
  }

  private _onError() {
    return e => {
      this.toastr.error(`카테고리 ${this.subTitle} 실패`, '[카테고리 관리]');
      this.redirectToCategoryList();
    };
  }
}

