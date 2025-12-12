import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCatDto, updateCarDto } from './dtos';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // { id: uuid(), brand: 'Toyota', model: 'Corolla', year: 2020 },
  ];

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with ID ${id} not found`);

    return car;
  }

  findAll() {
    return this.cars;
  }

  create(car: CreateCatDto) {
    const newCar = { ...car, id: uuid() };

    this.cars.push(newCar);

    return newCar;
  }

  update(id: string, updatedCar: updateCarDto) {
    const searchedCar = this.findOneById(id);

    this.cars = this.cars.map((car) =>
      car.id === id ? { ...car, ...updatedCar, id } : car,
    );

    return searchedCar;
  }

  delete(id: string) {
    this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return { message: `Car with ID ${id} has been deleted` };
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
