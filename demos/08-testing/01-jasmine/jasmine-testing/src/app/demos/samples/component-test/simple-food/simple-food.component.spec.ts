import { of } from 'rxjs';
import { foodData, serviceResult } from './simple-food-component.data';
import { SimpleFoodComponent } from './simple-food.component';
import { TestBed } from '@angular/core/testing';
import { FoodServiceBS } from '../../food/food.service-bs';
import { MatCardModule } from '@angular/material/card';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('Component - Spy - FoodComponent:', () => {
  let component: SimpleFoodComponent;
  let fs: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, NoopAnimationsModule],
      declarations: [SimpleFoodComponent],
      providers: [FoodServiceBS],
    });

    fs = jasmine.createSpyObj(['getFood', 'deleteFood']);
    fs.getFood.and.returnValue(of(foodData))
    component = new SimpleFoodComponent(fs);
    component.ngOnInit()
  });

  it('should call getItems to subscribe data', () => {
    expect(component.food.length).toBe(4)
  })

  it('removes the item from the list', () => {
    fs.deleteFood.and.returnValue(of(serviceResult));
    const deletedFood = foodData[3];
    component.deleteFood(deletedFood);
    expect(component.food.length).toBe(3);
  });

});
