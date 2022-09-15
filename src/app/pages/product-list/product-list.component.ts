import { Component, OnInit } from '@angular/core';
import { products } from '../../core/models/products';
import {AppSettingsService} from '../../core/services/app-settings-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;
  constructor(private settings : AppSettingsService) {

  }
  ngOnInit(): void {
    //console.log(this.settings.apiBaseUrl);
  }
  share() {
    window.alert('The product has been shared!');
  }
  onClick() {
    alert('test');
  }
  onNotify(product:any) {
    console.log(product);
  }

}