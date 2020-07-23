import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
})
export class LogInComponent implements OnInit {
click="clicking";
  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('name')){
      this.router.navigateByUrl('')
      // window.location.href='http://localhost:4200'
      this.click="localstorage"
    }
    else{
      this.click="empty"
    }
    
  }
  //login fuction
login(){
localStorage.setItem('name',"hassan")
this.router.navigateByUrl('')
// window.location.href='http://localhost:4200'
}
}
