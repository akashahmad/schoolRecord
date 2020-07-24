import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ApisService } from './../services/apis.service';
import { Store,select } from "@ngrx/store";
import * as StudentsActions from "../store/actions/students.actions";
import * as fromStudent from '../store/selectors/students.selectors'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  records = []
  students=[]
  editStudentId = ''
  constructor(private router: Router, private apisService: ApisService,private store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(new StudentsActions.LoadStudentss())
    this.store.pipe(select(fromStudent.getStudent)).subscribe(
students=>{
  console.log("students",students)
  this.students=students
}
    )
    this.apisService.getSchoolData().then(res => {
      this.records = res.data.data
    })

  }

  logout() {
    localStorage.clear()
    this.router.navigateByUrl('login')
    // window.location.href='http://localhost:4200/login'
  }
  import() {
    this.router.navigateByUrl('importPopup')
  }
  setEditUserId(id)
  {
    
    if(id==this.editStudentId){
      this.editStudentId =''
    }
    else{
      this.editStudentId =id
    }
  }
  checkId(id){
    return id == this.editStudentId;
  }
}
