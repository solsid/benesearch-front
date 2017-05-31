import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, ResponseContentType } from '@angular/http';

@Injectable()
export class PhotoExportService {

  constructor(
    private http: Http
  ) {}

  public exportAll = () => {
    const headers = new Headers({
        'Content-Type': 'application/zip',
        'Accept': 'application/zip'
      });
    const options = new RequestOptions({
        headers: headers,
        responseType: ResponseContentType.Blob
      });

    return this.http.get('https://benesearch.herokuapp.com/photo/export/all', options)
          .map(res => res['_body']);
  }

  public uploadFile = (file: File) => {
    const formData:FormData = new FormData();
    formData.append('file', file, file.name);
    const headers = new Headers();
    //headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post('https://benesearch.herokuapp.com/upload', formData, options);
    //    .map(res => res.json());
  }

  public exportTeamPhotos = (file: File, team: string) => {
    const formData:FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('team', team);
    const headers = new Headers({
        'Accept': 'application/zip'
      });
    //headers.append('Content-Type', 'multipart/form-data');
    const options = new RequestOptions({
        headers: headers,
        responseType: ResponseContentType.Blob
      });
    return this.http.post('https://benesearch.herokuapp.com/exportTeamPhoto', formData, options)
          .map(res => res['_body']);
  }

  public exportWithoutPhoto = (file: File) => {
        const formData:FormData = new FormData();
    formData.append('file', file, file.name);
    const headers = new Headers({
        'Accept': 'application/zip'
      });
    //headers.append('Content-Type', 'multipart/form-data');
    const options = new RequestOptions({
        headers: headers,
        responseType: ResponseContentType.Blob
      });
    return this.http.post('https://benesearch.herokuapp.com/exportWithoutPhoto', formData, options)
          .map(res => res['_body']);
  }
}
