// src/app.controller.ts
import { Controller, Get, Redirect, Delete, Post } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Redirect('/cars') // Redirige vers la liste des voitures au démarrage
  getHomePage() {
    return;
  }

  @Get('/cars')
  @Redirect('/cars/all') // Redirige vers la liste de toutes les voitures
  getCarsPage() {
    return;
  }

  @Get('/cars/all')
  getAllCars() {
    // Renvoie la liste complète des voitures
  }

  @Get('/cars/:id')
  getCarById() {
    // Renvoie les détails d'une voiture par ID
  }

  @Post('/cars')
  addCar() {
    // Ajoute une nouvelle voiture
  }

  @Delete('/cars/:id')
  deleteCar() {
    // Supprime une voiture par ID
  }

  @Get('/rentals')
  @Redirect('/rentals/all') // Redirige vers la liste de toutes les locations
  getRentalsPage() {
    return;
  }

  @Get('/rentals/all')
  getAllRentals() {
    // Renvoie la liste complète des locations
  }

  @Get('/rentals/:id')
  getRentalById() {
    // Renvoie les détails d'une location par ID
  }

  @Post('/rentals')
  addRental() {
    // Ajoute une nouvelle location
  }

  @Delete('/rentals/:id')
  deleteRental() {
    // Supprime une location par ID
  }
}
