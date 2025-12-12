import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { BRAND_SEED } from './data/brand.seed';
import { CAR_SEED } from './data/cars.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}
  populateDB() {
    this.brandsService.fillBrandsWithSeedData(BRAND_SEED);
    this.carsService.fillCarsWithSeedData(CAR_SEED);
    return 'This action seeds the database';
  }
}
