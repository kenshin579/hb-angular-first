import {Inject, Injectable} from '@angular/core';
import {LogLevel} from "./log-level.enum";
import * as format from 'date-fns/format';
import {LOG_LEVEL_TOKEN} from "./app.tokens";

@Injectable()
export class MySpecialLoggerService {
  logLevel: LogLevel; //현재 서비스에 실정한 로그 레벨
  logs: string[] = []; //속성은 과거 로그를 보관
  private readonly MAX_HISTORY_CNT: number = 100; //보관할 로그의 최대수
  private readonly TIME_FORMATTER: string = "YYYY-MM-DD HH:mm:ss.SSS"; //로그를 출력할때 함께 출력할 시간의 포멧 정보

  constructor(@Inject(LOG_LEVEL_TOKEN) logLevel: LogLevel) {
    this.MAX_HISTORY_CNT = 100;
    this.logLevel = logLevel;
    this.logs = [];

  }

  debug(msg: string) {
    this.log(LogLevel.DEBUG, msg);
  }

  info(msg: string) {
    this.log(LogLevel.INFO, msg);
  }

  warn(msg: string) {
    this.log(LogLevel.WARN, msg);
  }

  error(msg: string) {
    this.log(LogLevel.ERROR, msg);
  }

  log(logLevel: LogLevel, msg: string) {
    const logMsg = this.getFormattedLogMsg(this.logLevel, msg);
    if (this.isProperLogLevel(logLevel)) {
      console.log(logMsg);
      this.keepLogHistory(logMsg);
    }
  }

  private keepLogHistory(log: string) {
    if (this.logs.length === this.MAX_HISTORY_CNT) {
      this.logs.shift();
    }
    this.logs.push(log);
  }

  private getFormattedLogMsg(logLevel: LogLevel, msg: string) {
    const curTimestamp = format(new Date(), this.TIME_FORMATTER);
    return `[${LogLevel[logLevel]}] ${curTimestamp} - ${msg}`;
  }

  private isProperLogLevel(logLevel: LogLevel): boolean {
    if (this.logLevel === LogLevel.DEBUG) return true;
    return logLevel >= this.logLevel;
  }

}
