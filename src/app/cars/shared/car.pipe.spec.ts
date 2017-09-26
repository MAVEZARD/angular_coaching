import { CarPipe } from './car.pipe';
import { Car } from 'app/cars/shared/car';

describe('CarPipe', () => {
  it('create an instance', () => {
    const pipe = new CarPipe();
    expect(pipe).toBeTruthy();
  });

  it('works', () => {
    const pipe = new CarPipe();
    const result = pipe.transform(new Car(1, 'Audi', 'A8'));
    expect(result).toEqual('Audi A8');
  });
});
