import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss']
})
export class NewProductsComponent implements OnInit {
  products:Product[] = []

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsService.products
  }

}
