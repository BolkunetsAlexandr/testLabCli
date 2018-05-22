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
    return this.httpClient.get<any>(ApiSetting.API_ENDPOINT_URL + '/methodics/description/open', {headers : HeadersContainer.getTokenHeader()});
  }

  public getMethodicsById(id: string): Observable<any> {
    return this.httpClient.get<any>(ApiSetting.API_ENDPOINT_URL + '/methodics/get/' + id, {headers : HeadersContainer.getTokenHeader()});
  }

}
