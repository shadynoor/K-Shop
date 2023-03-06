import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { WishingService } from 'src/app/services/wishing.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  liked = false;
  onSale = true

  @Input() product!:Product

  constructor(private cartService:CartService , private wishlistService:WishingService) { }

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

  addToWishList(product:Product){
    this.liked = true
    this.wishlistService.addToWishList(product)
  }

  removeFromWishList(index:number){
    this.wishlistService.deleteProductFromWishList(index)
  }

}
