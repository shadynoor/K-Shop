import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['./recently-viewed.component.scss']
})
export class RecentlyViewedComponent implements OnInit {
  recentlyViewed:Product[] = []
  liked = false

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.recentlyViewed = this.productService.recentlyViewedProducts
  }

}
