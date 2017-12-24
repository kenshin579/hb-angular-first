import * as format from 'date-fns/format';
export declare type ScmDomain = 'product' | 'cateogry';

export class ScmSharedUtil {
  static getCurrentDate() {
    return format(new Date(), 'YYYY-MM-DD');
  }

  static getCurrentDateTime() {
    return format(new Date(), 'YYYY-MM-DD HH:mm:ss');
  }
}
