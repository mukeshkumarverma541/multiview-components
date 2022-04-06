import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit, OnDestroy {

  id!: number;
  products: any;
  productDetails: any;

  constructor(private activateRoute: ActivatedRoute, private productService: ProductsService, private headerService: HeaderService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => {
      console.log(data['id']);
      this.id = data['id'];
    })

    this.products =  this.productService.products;
    console.log(this.products);

    
    this.productDetails = this.products[this.id];
    console.log(this.productDetails);

    this.headerService.headerNav.next(false);
    this.headerService.goBackLink.next({text: 'Back to product', url: '/products'});
  }

ngOnDestroy(): void {
    this.headerService.headerNav.next(true);
    this.headerService.goBackLink.next({text: '', url: ''});

  }

}

