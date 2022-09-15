import { Component, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts!: { type: string, price: number }[];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getShippingPrices().subscribe({
      next: (data) => {
        console.log(data);
        this.shippingCosts = data;
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => console.log('done'),
    });
  }
}
