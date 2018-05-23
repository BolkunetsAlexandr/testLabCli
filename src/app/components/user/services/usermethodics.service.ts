import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiSetting} from '../../../constants/api.setting';
import {HeadersContainer} from '../../utils/headersContainer';
import {Observable} from 'rxjs/Observable';
import {StorageKey} from '../../../constants/storage.key';
import {PassingTest} from '../../../domain/methodics/passingTest';

@Injectable()
export class UserMethodicsService {

  constructor(private httpClient: HttpClient) { }

  public getAvailableMethodics(): Observable<any> {
    return this.httpClient.get<any>(ApiSetting.API_ENDPOINT_URL + '/methodics/description/open', {headers : HeadersContainer.getTokenHeader()});
  }

  public getMethodicsById(id: string): Observable<any> {
    return this.httpClient.get<any>(ApiSetting.API_ENDPOINT_URL + '/methodics/get/' + id, {headers : HeadersContainer.getTokenHeader()});
  }

  public sendResultMethodics(passingFact: PassingTest, responseCatcher?: (x) => any) {
    return this.httpClient.put(ApiSetting.API_ENDPOINT_URL + '/result/save', passingFact, {headers : HeadersContainer.getTokenAndJsonTypeHeaders()}).subscribe(x => responseCatcher(x));
  }

}
