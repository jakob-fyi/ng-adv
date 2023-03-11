import { of } from 'rxjs';
import { foodData, serviceResult } from './simple-food-component.data';
import { SimpleFoodComponent } from './simple-food.component';

describe('Component - Spy - FoodComponent:', () => {
  let comp: SimpleFoodComponent;
  let fs: any;

  beforeEach(() => {

    fs = jasmine.createSpyObj(['getFood', 'deleteFood']);
    fs.getFood.and.returnValue(of(foodData))
    comp = new SimpleFoodComponent(fs);
    comp.ngOnInit()
  });

  it('should call getItems to subscribe data', () => {
    expect(comp.food.length).toBe(4)
  })

  it('removes the item from the list', () => {
    fs.deleteFood.and.returnValue(of(serviceResult));
    const deletedFood = foodData[3];
    comp.deleteFood(deletedFood);
    expect(comp.food.length).toBe(3);
  });

});
