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
      sum += this.productsInCart[i].price
    }
    return sum
  }

  clearCart(){
    this.cartService.clearCart()
    this.productsInCart = []
  }

  buyNow(){
    if (!this.success) {
      this.isLoading = true
      setTimeout(() => {
        this.success = true
        this.isLoading = false
      }, 500);
    }
  }


}
