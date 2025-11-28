import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    { id: 0, brand: 'Toyota', model: 'Corolla', year: 2020 },
    { id: 1, brand: 'Honda', model: 'Civic', year: 2019 },
    { id: 2, brand: 'Ford', model: 'Mustang', year: 2021 },
  ];

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with ID ${id} not found`);

    return car;
  }

  findAll() {
    return this.cars;
  }
}
