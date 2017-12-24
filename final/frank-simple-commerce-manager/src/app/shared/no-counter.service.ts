import {EventEmitter, Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {ScmDomain} from './scm-shared-util';

/**
 * 실시간 데이버베이스로 번호를 관리할 서비스는 NoCounterService
 * - firebase에서는 id를 지정하지 않으면 임의 값을 할당하기 때문에 이 클래스에서 관리하도록 함
 */
@Injectable()
export class NoCounterService {

  constructor(private db: AngularFireDatabase) {
  }

  get(domain: ScmDomain): Observable<number> {
    console.log(`domain: ${domain}`);
    return this._getNumber$(domain).map(o => o.$value || 0); //Observable<number>이기 때문에 _getNumber$로 이름을 정함
  }

  /**
   * 번호 중가 트랜잭션 메서드
   * - 여러 사람이 동시에 수정할 수 있으므로 트랙잰션 처리가 필요함
   *
   * @param {ScmDomain} domain
   * @returns {Observable<number>}
   */
  incAndGet(domain: ScmDomain): Observable<number> {
    const id$ = new EventEmitter<number>();

    const onComplete = (err, comitted, dataSnapshot) => {
      if (err) throw new Error(`failed to increase number`);

      if (comitted) {
        //todo: emit하게 되면 실제로 어디로 데이터가 전달되나?? id$를 구독하고 있는 쪽에서 trasaction 결과를 전달받아 사용하게 됨
        id$.emit(dataSnapshot.val());
        id$.complete();
      }
    };
    this._getNumber$(domain).$ref.transaction(num => (num || 0) + 1, onComplete);

    return id$;
  }

  private _getNumber$(domain: ScmDomain) {
    return this.db.object(`/numbers/${domain}`);
  }
}
