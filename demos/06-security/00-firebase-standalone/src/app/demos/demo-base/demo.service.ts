import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { DemoItem } from './demo-item.model';

@Injectable()
export class DemoService {
  constructor(private httpClient: HttpClient) {}

  getItems(): Observable<DemoItem[]> {
    return this.httpClient
      .get<DemoItem[]>('/assets/demos.json')
      .pipe(tap((items) => console.log(items)));
  }
}
