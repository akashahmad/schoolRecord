import { ApisService } from './../services/apis.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-import-popup',
  templateUrl: './import-popup.component.html',
})
export class ImportPopupComponent implements OnInit {
  studentsRecord = []
  previousSchool=""
  constructor(private router: Router,private apisService:ApisService) { }
 
  ngOnInit(): void {
  }
  close() {
    this.router.navigateByUrl('')
  }
  setPreviousSchool(event){
   this.previousSchool=event 
}
  csv2Array(fileInput: FileList) {
    //read file from input
    const fileReaded = fileInput[0];

    let reader: FileReader = new FileReader();
    reader.readAsText(fileReaded);

    reader.onload = (e) => {
      let csv = reader.result + '';
      let allTextLines = csv.split(/\r|\n|\r/);
      let headers = allTextLines[0].split(',');
      let lines = [];

      for (let i = 0; i < allTextLines.length; i++) {
        // split content based on comma
        let data = allTextLines[i].split(',');
        if (data.length === headers.length) {
          let tarr = [];
          for (let j = 0; j < headers.length; j++) {
            tarr.push(data[j]);
          }

          // log each row to see output 
          // console.log(tarr);
          lines.push(tarr);
        }

      }
      this.studentsRecord=[...lines]

      // all rows in the csv file 
      //  console.log(">>>>>>>>>>>>>>>>>", lines);
    }
  }
  import(){
// console.log("previosschool",this.previousSchool);
// console.log("studentsRecord",this.studentsRecord);
this.studentsRecord=this.studentsRecord.map((single)=>{
  single.previousSchool=this.previousSchool
  return single
})
console.log("this.studentsRecord",this.studentsRecord)
this.apisService.impor(this.studentsRecord)
  }
}
