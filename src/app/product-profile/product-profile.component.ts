import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../models/product.interface';
import { ProductService } from '../services/products.service';

@Component({
  templateUrl: './product-profile.component.html',
  styleUrls: ['./product-profile.component.css'],
})
export class ProductProfileComponent implements OnInit {
  currentProductId: number;
  currentProduct: IProduct;

  constructor(private activatedRoute: ActivatedRoute, private route: Router) {}
  ngOnInit(): void {
    console.log();
    this.currentProduct = this.activatedRoute.snapshot.data['productData'];
    // this.activatedRoute.params.subscribe((param) => {
    //   console.log('Param', +param['id']);
    // });

    // this.productService
    //   .getProduct(this.currentProductId)
    //   .subscribe((data: IProduct) => {
    //     this.currentProduct = data;
    //   });
  }

  goBack() {
    console.log('Back Clicked', this.route);
    this.route.navigate(['/products']);
  }
  goToCreateNew() {
    console.log('Create New Clicked', this.route);
    this.route.navigate(['products/new']);
  }
  buyProduct(currentProduct: IProduct){
    console.log('Buying initiated for ' + this.currentProduct.productName);
  }
}
