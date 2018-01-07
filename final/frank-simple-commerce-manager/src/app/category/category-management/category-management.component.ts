import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {Categories} from '../category.model';
import {DataStoreService} from '../../shared/data-store.service';
import {CAT_LIST_PAGE_SIZE} from '../category.tokens';

/**
 * CategoryManagementComponent는 왼쪽 사이드바의 카테고리 관리 메뉴를 선택할 때 카테고리 도메인의 루트 뷰를 담당함
 * /category-list
 * - pagenation 기능이 필요함
 */
@Component({
  selector: 'scm-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css']
})
export class CategoryManagementComponent implements OnInit {
  categories: Categories;
  totalItemCnt: number = 0;
  pageSize: number;
  pageNo: number = 1;

  constructor(private route: ActivatedRoute,                  //최초 페이지의 카테고리 목록 데이터를 resolve 가드로부터 받아오기 위하여 사용
              private database: DataStoreService,
              @Inject(CAT_LIST_PAGE_SIZE) pageSize: number) {
    this.pageSize = pageSize;
  }

  ngOnInit() {
    this.database.count('category').subscribe(cnt => this.totalItemCnt = cnt);
    this.fetchResolvedData(); //Resolve 가드에서 전달한 최초 페이지 목록 데이터를 가져옴
  }

  pageNoChanged(pageNo) {
    this.pageNo = pageNo;
    this.getPagedList();
  }

  getPagedList() {
    this.database.findList$ByPage('category', this.pageNo, this.pageSize, this.totalItemCnt)
      .do((list: Categories) => list.sort((p1, p2) => p2.no - p1.no))
      .subscribe(cats => this.categories = cats);
  }

  private fetchResolvedData() {
    const resolvedData = <{ list: Categories }>this.route.snapshot.data; //todo: <...> 이 부분 잘 이해 안됨
    this.categories = resolvedData.list;
  }
}
