import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:Product[] = [
    { title:'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',price: 90.00 , rate: 3 , sale: true , state: 'offer' , oldPrice: 150.00 , img:'assets/images/pic.png'},
    { title:'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',price: 90.00 , rate: 2 , sale: false , state: 'new' , img:'assets/images/pic-1.png'},
    { title:'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',price: 90.00 , rate: 1 , sale: false , state: 'new' , img:'assets/images/pic-2.png'},
    { title:'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',price: 90.00 , rate: 5 , sale: false , state: 'new' , img:'assets/images/pic-3.png'},
  ]

  recentlyViewedProducts:Product[] = [
    { title:'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',price: 90.00 , rate: 3 , sale: true , state: 'new' , img:'assets/images/pic-6.png'},
    { title:'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',price: 90.00 , rate: 3 , sale: true , oldPrice: 150.00 , state: 'offer' , img:'assets/images/pic-4.png'},
    { title:'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',price: 90.00 , rate: 3 , sale: true , state: 'old' , img:'assets/images/pic-5.png'},
  ]

  constructor() { }
}
