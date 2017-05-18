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
}
