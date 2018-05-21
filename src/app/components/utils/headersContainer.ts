import {StorageKey} from '../../constants/storage.key';
import {HttpHeaders} from '@angular/common/http';

export class HeadersContainer {
  static getContentTypeHeader(): HttpHeaders {
    const headers = new HttpHeaders();
    headers.set('Content-type', 'application/json');
    return headers;
  }

  static getTokenHeader(): HttpHeaders {
    const headers = new HttpHeaders();
    headers.set('Authorization', 'Bearer ' + localStorage.getItem(StorageKey.TOKEN));
    return headers;
  }

  static getTokenAndJsonTypeHeaders(): HttpHeaders {
    const headers = new HttpHeaders();
    headers.set('Content-type', 'application/json');
    headers.set('Authorization', 'Bearer ' + localStorage.getItem(StorageKey.TOKEN));
    return headers;
  }
}
