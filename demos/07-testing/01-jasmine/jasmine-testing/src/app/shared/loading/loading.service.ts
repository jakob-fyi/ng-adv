import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }

  getLoading(): Observable<boolean> {
    return this.isLoading.asObservable();
  }

  setLoading(loading: boolean) {
    this.isLoading.next(loading);
  }
}
