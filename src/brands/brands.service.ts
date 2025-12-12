import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'Toyota',
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },
  ];

  create(createBrandDto: CreateBrandDto) {
    const newBrand: Brand = {
      ...createBrandDto,
      id: uuid(),
      createdAt: new Date(),
    };

    this.brands.push(newBrand);

    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const searchedBrand = this.brands.find((brand) => brand.id === id);

    if (!searchedBrand)
      throw new NotFoundException(`Brand with ID ${id} not found`);

    return searchedBrand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    this.findOne(String(id));

    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        return { ...brand, ...updateBrandDto, id, updatedAt: new Date() };
      }
      return brand;
    });

    return `Brand with ID ${id} updated successfully`;
  }

  remove(id: string) {
    const searchedBrand = this.findOne(String(id));

    this.brands = this.brands.filter((brand) => brand.id !== id);

    return searchedBrand;
  }

  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
