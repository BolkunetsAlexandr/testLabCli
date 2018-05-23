import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class StatesaverService {

  public saveUrlState(key: string, url: string) {
      localStorage.setItem(key, url);
  }
  public getUrlStateByKey(key: string): string {
    return localStorage.getItem(key);
  }
  public saveObjectState(key: string, object: any) {
    localStorage.setItem(key, JSON.stringify(object));
  }
  public getObjectState(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }
}
