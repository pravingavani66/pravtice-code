import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from '../models/product.interface';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css'],
})
export class TestComponentComponent implements OnInit {
  productList: IProduct[];
  productList2: IProduct[];
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    //this.productList = this.productService.getProducts();
  }

  refreshTestData() {
    //is.productList = this.productService.getProducts();
  }
}
