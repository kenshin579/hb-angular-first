import {Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {CAT_LIST_PAGE_SIZE} from "../category.tokens";
import {Categories} from "../category.model";
import {DataStoreService} from "../../shared/data-store.service";

/**
 * CategoryListResolverService는 CategoryManagementComponent의 뷰가 화면에 렌더링되기전에 서버에서
 * 카테고리 목록정보를 가져오기 위하여 사용할 서비스임
 *
 */
@Injectable()
export class CategoryListResolverService implements Resolve<any> {

  constructor(private database: DataStoreService,
              @Inject(CAT_LIST_PAGE_SIZE) private pageSize: number) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.database.count('category')
      .switchMap(cnt => this.database.findList$ByPage('category', 1, this.pageSize, cnt))
      .do((list: Categories) => list.sort((p1, p2) => p2.no - p1.no))
      .take(1); //note: firebase를 사용할때 resolve 가드를 사용한다면 take 연사자로 변경사항을 받지 않도록 커넥션을 닫아야 함
  }
}
