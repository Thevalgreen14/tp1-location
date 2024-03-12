// src/car/car.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class CarService {
  private cars = [
    { id: 1, brand: 'Toyota', model: 'Camry' },
    { id: 2, brand: 'Honda', model: 'Accord' },
    { id: 3, brand: 'Ford', model: 'Focus' },
  ];

  getAllCars() {
    return this.cars;
  }

  getCarById(id: number) {
    return this.cars.find(car => car.id === id);
  }

  addCar(newCar: { brand: string; model: string }) {
    const id = this.cars.length + 1;
    const car = { id, ...newCar };
    this.cars.push(car);
    return car;
  }

  deleteCar(id: number) {
    const index = this.cars.findIndex(car => car.id === id);
    if (index !== -1) {
      const deletedCar = this.cars.splice(index, 1);
      return deletedCar[0];
    }
    return null;
  }
}
