import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:Product[] = []


  addToCart(product:Product){
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]')
    this.cart.push(product)
    localStorage.setItem('cart' , JSON.stringify(this.cart))
  }

  getProductsFromCart(){
    return this.cart = JSON.parse(localStorage.getItem('cart') || '[]')
  }

  deleteProductFromCart(i:number){
    this.cart.splice(i,1)
    localStorage.setItem('cart' , JSON.stringify(this.cart))

  }

  clearCart(){
    localStorage.removeItem('cart')
  }




  constructor() { }
}
