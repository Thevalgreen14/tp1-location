// src/rental/rental.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class RentalService {
  private rentals = [
    { id: 1, customer: 'John Doe', carId: 1 },
    { id: 2, customer: 'Jane Smith', carId: 2 },
    { id: 3, customer: 'Bob Johnson', carId: 3 },
  ];

  getAllRentals() {
    return this.rentals;
  }

  getRentalById(id: number) {
    return this.rentals.find(rental => rental.id === id);
  }

  addRental(newRental: { customer: string; carId: number }) {
    const id = this.rentals.length + 1;
    const rental = { id, ...newRental };
    this.rentals.push(rental);
    return rental;
  }

  deleteRental(id: number) {
    const index = this.rentals.findIndex(rental => rental.id === id);
    if (index !== -1) {
      const deletedRental = this.rentals.splice(index, 1);
      return deletedRental[0];
    }
    return null;
  }
}
