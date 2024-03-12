// src/rental/rental.controller.ts
import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { RentalService } from './rental.service';

@Controller('rentals')
export class RentalController {
  constructor(private readonly rentalService: RentalService) {}

  @Get()
  getAllRentals() {
    return this.rentalService.getAllRentals();
  }

  @Get(':id')
  getRentalById(@Param('id') id: string) {
    return this.rentalService.getRentalById(Number(id));
  }

  @Post()
  addRental(@Body() newRental: { customer: string; carId: number }) {
    return this.rentalService.addRental(newRental);
  }

  @Delete(':id')
  deleteRental(@Param('id') id: string) {
    return this.rentalService.deleteRental(Number(id));
  }
}
