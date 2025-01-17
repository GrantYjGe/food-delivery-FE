import { Component } from '@angular/core';
import { Restaurant } from '../../Shared/models/Restaurant';
import { RestaurantService } from '../service/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-listing',
  templateUrl: './restaurant-listing.component.html',
  styleUrl: './restaurant-listing.component.css',
})
export class RestaurantListingComponent {
  onButtonClick(id: number) {
    this.router.navigate(['/food-catalogue', id]);
  }
  public restaurantList: Restaurant[];

  ngOnInit() {
    this.getAllRestaurants();
  }

  constructor(
    private router: Router,
    private restaurantService: RestaurantService
  ) {}

  getAllRestaurants() {
    this.restaurantService.getAllRestaurants().subscribe((data) => {
      this.restaurantList = data;
    });
  }

  getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomImage() {
    const imageCount = 8;
    const randomindex = this.getRandomNumber(1, imageCount);
    return `${randomindex}.jpg`;
  }
}
