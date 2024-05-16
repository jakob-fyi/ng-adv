import { TestBed } from '@angular/core/testing';
import { FoodItem } from './food.model';
import { FoodService } from './food.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { foodLoadData, foodQueryItem } from './food.mocks';
import { environment } from 'src/environments/environment';

describe('FoodService', () => {
  //add your setup here
  let fs: FoodService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FoodService],
    });

    fs = TestBed.inject(FoodService);
    controller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should return the initial load data', () => {

    fs.getFood().subscribe((data) => {
      expect(data).toBeTruthy();
      expect(data.length).toBe(foodLoadData.length);
      const firstFood = data.find((f) => f.id == 2);
      expect(firstFood).toEqual(foodQueryItem);
    });

    const url = `${environment.api}food`;
    const req = controller.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(foodLoadData);

  });

  it('should create a new food item', () => {
    pending();
  });

  it('should update a food item', () => {
    pending();
  });

  it('should delete a food item', () => {
    pending();
  });
});
