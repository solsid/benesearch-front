import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class BadgesService {

  constructor(
    private http: Http
  ) {}

  public getVolunteersWithAccessRights(volunteersFile: File, accessRightsFile: File) {
    const formData: FormData = new FormData();
    formData.append('volunteersFile', volunteersFile, volunteersFile.name);
    formData.append('accessRightsMatrixFile', accessRightsFile, accessRightsFile.name);
    return this.http.post('https://benesearch.herokuapp.com/getVolunteersWithAccessRights', formData)
          .map(res => res.json());
  }
}
