import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  liked = false;
  onSale = true

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
