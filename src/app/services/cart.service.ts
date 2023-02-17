import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:Product[] = []

  addToCart(product:Product){
    product.qty = 1
    if ("cart" in localStorage) {
      this.cart = JSON.parse(localStorage.getItem('cart') || "[]")
      let exist = this.cart.find(elem => elem.id == product.id)
      if (exist) {
        exist.qty! += product.qty
        this.cart[this.cart.indexOf(exist)] = exist
        localStorage.setItem('cart',JSON.stringify(this.cart))
      }else{
        this.cart.push(product)
        localStorage.setItem('cart',JSON.stringify(this.cart))
      }
    }else{
      this.cart.push(product)
      localStorage.setItem('cart',JSON.stringify(this.cart))
    }
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
