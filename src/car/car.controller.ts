// src/car/car.controller.ts
import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { CarService } from './car.service';

@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  getAllCars() {
    return this.carService.getAllCars();
  }

  @Get(':id')
  getCarById(@Param('id') id: string) {
    return this.carService.getCarById(Number(id));
  }

  @Post()
  addCar(@Body() newCar: { brand: string; model: string }) {
    return this.carService.addCar(newCar);
  }

  @Delete(':id')
  deleteCar(@Param('id') id: string) {
    return this.carService.deleteCar(Number(id));
  }
}
