import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any;
 
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productService.products;
    console.log(this.products);

  }

}
