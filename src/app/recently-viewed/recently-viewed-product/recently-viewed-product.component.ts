import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-recently-viewed-product',
  templateUrl: './recently-viewed-product.component.html',
  styleUrls: ['./recently-viewed-product.component.scss']
})
export class RecentlyViewedProductComponent implements OnInit {

  liked = false
  @Input() product!:Product

  constructor(private cartService:CartService) { }

  ngOnInit(): void {

  }


  likedProduct(){
    if (this.liked) {
      this.liked = false
    }else{
      this.liked = true
    }
  }

  addToCart(product:Product){
    this.cartService.addToCart(product)
  }

}
