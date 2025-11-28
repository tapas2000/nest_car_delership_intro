import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.findOneById(id);
  }

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Post()
  create(@Body() createCarDto: any) {
    console.log(createCarDto);

    return 'This action adds a new car';
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarDto: any) {
    console.log(updateCarDto);

    return `This action updates a #${id} car`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} car`;
  }
}
