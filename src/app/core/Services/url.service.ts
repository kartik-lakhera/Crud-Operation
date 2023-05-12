import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  emails:  any = [];
  Url: any = 'http://localhost:3000/data';

  constructor(private httpService: HttpClient) { 
    console.log(this.emails)
  }

  getData() {
    return this.httpService.get(this.Url);
  }

  postData(data: any) {
    return this.httpService.post(this.Url, data);
  }

  putData(id: any, data: any) {
    return this.httpService.put(this.Url + '/' + `${id}`, data);
  }

  deleteData(id: any) {
    return this.httpService.delete(this.Url + '/' + id);
  }
}
