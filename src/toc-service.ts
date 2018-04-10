import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TocService {
  constructor(private http: HttpClient) {}

  loadPath(id: any, path: any) {
    return this.http.get(`http://localhost:8080/toc/${id}?path=${path}`);
  }
}
