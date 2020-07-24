import { Injectable } from '@angular/core';
import { apiUrl } from '../../config/config.json';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class ApisService {
 
  constructor() {}
  importSchoolData(record){
    axios.post(apiUrl+'/',).then(res=>{

    })
console.log("data",record)
  }
}
