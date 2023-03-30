import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { FoodServiceBS } from '../../food/food.service-bs';
import { foodData, serviceResult } from './simple-food-component.data';
import { SimpleFoodComponent } from './simple-food.component';
import { By } from '@angular/platform-browser';

describe('Component - Spy - FoodComponent:', () => {
  let component: SimpleFoodComponent;
  let fixture: ComponentFixture<SimpleFoodComponent>;
  let service: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, NoopAnimationsModule],
      declarations: [SimpleFoodComponent],
      providers: [{ provide: FoodServiceBS, useValue: { fs: service } }],
    });

    fixture = TestBed.createComponent(SimpleFoodComponent);
    service = jasmine.createSpyObj(['getFood', 'deleteFood']);
    service.getFood.and.returnValue(of(foodData))
    component = new SimpleFoodComponent(service);
    component.ngOnInit();
  });

  it('should call getItems to subscribe data', () => {
    expect(component.food.length).toBe(4)
  })

  it('removes the item from the list', () => {
    service.deleteFood.and.returnValue(of(serviceResult));
    const deletedFood = foodData[3];
    component.deleteFood(deletedFood);
    expect(component.food.length).toBe(3);
  });

});
