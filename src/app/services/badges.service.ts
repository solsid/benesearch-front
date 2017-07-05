import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class BadgesService {

  constructor(
    private http: Http
  ) {}

  getVolunteersWithAccessRights(
    volunteers: File,
    teamLeaders: File,
    nonTeamLeadersAccessRights: File,
    teamLeadersAccessRights: File) {
      const formData: FormData = new FormData();
      formData.append('volunteers', volunteers, volunteers.name);
      formData.append('teamLeaders', teamLeaders, teamLeaders.name);
      formData.append('nonTeamLeadersAccessRights', nonTeamLeadersAccessRights, nonTeamLeadersAccessRights.name);
      formData.append('teamLeadersAccessRights', teamLeadersAccessRights, teamLeadersAccessRights.name);
      return this.http.post('https://benesearch.herokuapp.com/getVolunteersWithAccessRights', formData)
            .map(res => res.json());
  }

  generateBadgeDatabaseInputFile = (
    volunteers: File,
    teamLeaders: File,
    nonTeamLeadersAccessRights: File,
    teamLeadersAccessRights: File) => {
      const formData:FormData = new FormData();
      formData.append('volunteers', volunteers, volunteers.name);
      formData.append('teamLeaders', teamLeaders, teamLeaders.name);
      formData.append('nonTeamLeadersAccessRights', nonTeamLeadersAccessRights, nonTeamLeadersAccessRights.name);
      formData.append('teamLeadersAccessRights', teamLeadersAccessRights, teamLeadersAccessRights.name);
      const headers = new Headers({
          'Accept': 'application/zip'
        });
      const options = new RequestOptions({
          headers: headers,
          responseType: ResponseContentType.Blob
        });
      return this.http.post('https://benesearch.herokuapp.com/badgeDatabase/inputFile/generate', formData, options)
            .map(res => res['_body'])
            .catch((error: any) => Observable.throw('Server error'));
  }
}
