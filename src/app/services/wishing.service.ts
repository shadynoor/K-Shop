import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class WishingService {

  wishList:Product[] = []

  getProductsFromwishList(){
    return this.wishList = JSON.parse(localStorage.getItem('wishList') || '[]')
  }

  addToWishList(product:Product){
    product.qty = 1
    if ("wishList" in localStorage) {
      this.wishList = JSON.parse(localStorage.getItem('wishList') || "[]")
      let exist = this.wishList.find(elem => elem.id == product.id)
      if (exist) {
        exist.qty! += product.qty
        this.wishList[this.wishList.indexOf(exist)] = exist
        localStorage.setItem('wishList',JSON.stringify(this.wishList))
      }else{
        this.wishList.push(product)
        localStorage.setItem('wishList',JSON.stringify(this.wishList))
      }
    }else{
      this.wishList.push(product)
      localStorage.setItem('wishList',JSON.stringify(this.wishList))
    }
  }


  deleteProductFromWishList(i:number){
    this.wishList.splice(i,1)
    localStorage.setItem('wishList' , JSON.stringify(this.wishList))
  }

  clearWishList(){
    localStorage.removeItem('wishList         ')
  }


  constructor() { }
}
