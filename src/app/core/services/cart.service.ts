import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/products';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(
    private http: HttpClient
  ) { }
  addToCart(product: Product) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get<{ type: string, price: number }[]>('../../../assets/shipping.json');
  }
  getWeatherForecast() {
    //return this.http.get<any>('https://localhost:7156/WeatherForecast');
    // return this.http
    //   .post('/auth/register/', { "username": 'simolee12', "email": 'xyz@gmail.com', "password": 'Anything@Anything' });

    return this.http.get<any[]>('/api/WeatherForecast/GetForecast');
  }
}