import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiSetting} from '../../../constants/api.setting';
import {HeadersContainer} from '../../utils/headersContainer';
import {Observable} from 'rxjs/Observable';
import {StorageKey} from '../../../constants/storage.key';

@Injectable()
export class UsermethodicsService {

  constructor(private httpClient: HttpClient) { }

  public getAvailableMethodics(): Observable<any> {
    const headers = new HttpHeaders({'Content-type' : 'application/json', 'Authorization' : 'Bearer ' + localStorage.getItem(StorageKey.TOKEN)});
    return this.httpClient.get<any>(ApiSetting.API_ENDPOINT_URL + '/methodics/description/open', {headers : headers});
  }

}
