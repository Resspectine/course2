import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class StaticService {

  constructor(private http: HttpClient) {
  }

  getCategories(): Promise<string[]> {
    return Promise.resolve(['asd', 'asd', 'dasd', 'dasd']);
  }

  getTags(): Promise<string[]> {
    return Promise.resolve(['']);
  }
}
