import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showSearch = false
  isAuth = false

  @ViewChild('searchInput' , {static:false}) searchInput!:ElementRef
  @ViewChild('searchInput2' , {static:false}) searchInput2!:ElementRef
  @ViewChild('smallSearch' , {static:false}) smallSearch!:ElementRef
  @ViewChild('searchDiv' , {static:false}) searchDiv!:ElementRef


  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.isAuth = !!user
    })

    if(localStorage.getItem('userData')){
      this.isAuth = true
    }
  }


  search(){
    let input = this.searchInput.nativeElement
    let input2 = this.searchInput2.nativeElement

    if (input?.value) {
      console.log(input.value);
    }else{
      if (window.innerWidth < 767) {
        input2.focus()
      }else{
        input.focus()
      }
    }
  }
  smallScreenSearch(){
    this.smallSearch.nativeElement.style.visibility = 'visible'
    this.smallSearch.nativeElement.style.opacity = '.9'
  }

  closeSearch(event:any){
    const box = this.searchDiv.nativeElement

    if (!box.contains(event.target)) {
      this.smallSearch.nativeElement.style.visibility = 'hidden'
      this.smallSearch.nativeElement.style.opacity = '0'
    }
  }

  logout(){
    this.isAuth = false
    this.authService.logout()
  }

}
