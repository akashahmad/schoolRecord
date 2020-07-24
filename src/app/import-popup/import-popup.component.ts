import { ApisService } from './../services/apis.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-import-popup',
  templateUrl: './import-popup.component.html',
})
export class ImportPopupComponent implements OnInit {
  studentsRecord = []
  previousSchool = ""
  constructor(private router: Router, private apisService: ApisService) { }

  ngOnInit(): void {
  }
  close() {
    this.router.navigateByUrl('')
  }
  setPreviousSchool(event) {
    this.previousSchool = event
  }
  csv2Array(fileInput: FileList) {
    //read file from input
    const fileReaded = fileInput[0];

    let reader: FileReader = new FileReader();
    reader.readAsText(fileReaded);

    reader.onload = (e) => {
      let csv = reader.result + '';
      let lines = [];
      //our new code
      let arr = csv.split('\n');
      let jsonObj = [];
      let headers = arr[0].split(',');
      for (var i = 1; i < arr.length; i++) {
        let data = arr[i].split(',');
        let obj = {};
        for (var j = 0; j < data.length; j++) {
          obj[headers[j].trim()] = data[j].trim();
        }
        if (obj && obj["name"]) {
          jsonObj.push(obj);
        }
      }
      console.log(jsonObj)
      this.studentsRecord = [...jsonObj]

      // all rows in the csv file 
      //  console.log(">>>>>>>>>>>>>>>>>", lines);
    }
  }
  import() {
    // console.log("previosschool",this.previousSchool);
    // console.log("studentsRecord",this.studentsRecord);
    this.studentsRecord = this.studentsRecord.map((single) => {
      single.previousSchool = this.previousSchool
      return single
    })
    console.log("this.studentsRecord", this.studentsRecord)
    this.apisService.importSchoolData(this.studentsRecord)
  }
}
