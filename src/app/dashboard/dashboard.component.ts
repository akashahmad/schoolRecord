import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (!localStorage.getItem('name')){
      this.router.navigateByUrl('login')
    //  window.location.href='http://localhost:4200/login'
      
    }
    
  }
logout(){
  localStorage.clear()
  this.router.navigateByUrl('login')
  // window.location.href='http://localhost:4200/login'
}
}
