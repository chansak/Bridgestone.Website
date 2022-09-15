import { Component, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import {Product} from '../../core/models/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Product[] = [];
  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();
  }

  ngOnInit(): void {
  }

}
