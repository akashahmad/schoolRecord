import { Injectable } from '@angular/core';
import { apiUrl } from '../../config/config.json';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class ApisService {
 
  constructor() {}
  importSchoolData(record){
    axios.post(apiUrl+'/student',{
      students:record
    }).then(res=>{
console.log(res)
    }).catch(err=>{
      console.log('err',err)
    })
// console.log("data",record)
  }
}
