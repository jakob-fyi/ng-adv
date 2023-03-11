import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { BehaviorSubject, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FoodItem } from './food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodServiceBS {
  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<FoodItem[]>(`${environment.apiUrl}food`)
      .subscribe((data) => {
        this.food.next(data);
      });
  }

  private food: BehaviorSubject<FoodItem[]> = new BehaviorSubject<FoodItem[]>([]);

  getFood() {
    return this.food.asObservable();
  }

  deleteFood(item: FoodItem) {
    let filtered = this.food.value.filter((f) => _.isEqual(f, item) == false);
    this.food.next(filtered);
    return of(true);
  }

  addFood(item: FoodItem) {
    let arr = this.food.value;
    arr.push(item);
    this.food.next(arr);
    return of(true);
  }
}
