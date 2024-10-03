import { Injectable } from '@nestjs/common';

export interface DatabaseService {
  /**
   * Read record.
   */
  get(...params: any[]): any;
  /**
   * Write record.
   */
  set(...params: any[]): any;
}

export interface DatabaseRecord {
  /**
   * Record id
   */
  id: any;
  /**
   * Record create time
   * https://en.wikipedia.org/wiki/Unix_time
   */
  createTimeUnix: any;
  /**
   * Record update time
   * https://en.wikipedia.org/wiki/Unix_time
   */
  updateTimeUnix: any;
}

@Injectable()
export class MongoDatabaseService implements DatabaseService {
  /**
   * Read record.
   */
  get(): Record<string, any> {
    return {
        "data": {
            "moredata": "some more data"
        }
    };
  };
  /**
   * Write record.
   */
  set(): Record<string, any> {
    return {
        "id": "id"
    };
  };
}