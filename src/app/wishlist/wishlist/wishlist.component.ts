import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { WishingService } from 'src/app/services/wishing.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  productsInWishList:Product[] = []

  constructor(private wishList:WishingService) { }

  ngOnInit(): void {

    this.productsInWishList = this.wishList.getProductsFromwishList()
  }

  clearWishList(){

  }

}
