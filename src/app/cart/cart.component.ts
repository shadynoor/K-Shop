import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  success!:boolean
  isLoading = false
  isUser = true

  productsInCart:Product[] = []

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.productsInCart = this.cartService.getProductsFromCart()
  }

  deleteProduct(i:number){
    this.cartService.deleteProductFromCart(i)
  }

  totalPrice(){
    let sum = 0
    for (let i = 0; i < this.productsInCart.length; i++) {
      let priceQty = this.productsInCart[i].price * this.productsInCart[i].qty!
      sum += priceQty
    }
    return sum
  }

  clearCart(){
    this.cartService.clearCart()
    this.productsInCart = []
  }

  buyNow(){
    if ('userData' in localStorage) {
      if (!this.success) {
        this.isLoading = true
        setTimeout(() => {
          this.success = true
          this.isLoading = false
        }, 500);
      }
    }else{
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.isUser = false
      }, 500);
  }
}
}
