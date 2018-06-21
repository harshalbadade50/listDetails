import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const getDataUrl:string = "https://randomuser.me/api/?inc=gender,name,email,location&results=50";

@Injectable()
export class DetailsService {
  myContactData:any[];
  constructor(private http: HttpClient) { }
  
  // get data using ajax. Live data through url
  getMyData(): Observable<any>{
     return this.http.get(getDataUrl);
  }
  private errorHandler(error: Response){
    return Observable.throw(error.statusText);
  }

  getContact(id):any{
    if(this.myContactData && id <= this.myContactData.length){
      return this.myContactData[id];
    }else{
      return null;
    }
  }
}
