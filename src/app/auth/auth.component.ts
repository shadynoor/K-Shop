import { Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isLogin = true
  isLoading = false
  error:any = null

  authForm = new FormGroup({
    email: new FormControl('' , [Validators.required]),
    password: new FormControl('' , Validators.required)
  })

  constructor(private authService:AuthService , private router:Router) { }


  ngOnInit(): void {
  }

  onSwitchMode(){
    this.isLogin = !this.isLogin;
  }

  authSubmit(){
    const email = this.authForm.controls.email.value || '';
    const password =this.authForm.controls.password.value || '';
    let authObs : Observable<AuthResponseData>

    if (this.isLogin) {
      this.isLoading = true
      authObs = this.authService.login(email,password)
    }else{
      this.isLoading = true
      authObs = this.authService.signUp(email,password)
    }

    authObs.subscribe((res) => {
      this.isLoading = false;
      this.isLogin = true
      this.error = null

      this.router.navigate([''])

    },error => {
      this.isLoading = false
      switch (error.error.error.message) {
        case "EMAIL_NOT_FOUND":
        this.error = 'هذا البريد غير مسجل مسبقا'
          break;
        case "INVALID_PASSWORD":
          this.error = 'كلمة المرور غير صحيحة'
            break;
        case "EMAIL_EXISTS":
          this.error = 'هذا البريد الالكتروني مستخدم بالفعل'
            break;
        case "INVALID_EMAIL":
          this.error = 'البريد الالكتروني غير صحيح'
            break;
        default:
          this.error = error.error.error.message
          break;
      }
      console.log(error);

    })
  }

}
