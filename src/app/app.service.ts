import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  url:any;

  constructor(private _http:HttpClient  ) {
    this.url=environment.url;
   }
   save(user):Observable<any>{
  
    return this._http.post<any>(this.url+'/save',user);
  }
   getAllU():Observable<any>{
  
    return this._http.get<any>(this.url+'/allSaves');
  }

  getSave(id:number):Observable<any>{
    return this._http.get<any>(this.url+'/save/'+id);
  }
  deleteSaves():Observable<any>{
    return this._http.delete<any>(this.url+'/deleteSaves');
  }
}
