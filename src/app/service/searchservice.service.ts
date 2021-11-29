import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Criteria } from '../model/criteria.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchserviceService {

  url: string = environment.serviceurl;
  profile:string=environment.profile;

  constructor(private http : HttpClient) { }


 getUsersObservable(): Observable<User[]> {
  return this.http.get<User[]>(this.url)
    .pipe(map((data:User[])=>{
      return data;
    }), catchError(error => {
      return throwError( 'Service error!' );
    }) )
}

searchUsersByCriteria(searchCriteria:Criteria,pageNo:number): Observable<User[]> {
  console.log(searchCriteria.searchName);
  if(searchCriteria.searchName.length>0){
    var endpoint = this.url+"/searchName/"+searchCriteria.searchAssociateId+'-'+searchCriteria.searchName+"/"+pageNo;
    console.log(endpoint);
    if(this.profile=='local'){
      endpoint = "http://localhost:3000/Users"
    }
  return this.http.get<User[]>(endpoint)
    .pipe(map((data:User[])=>{
      return data;
    }), catchError(error => {
      return throwError( 'Service error!' );
    }) )
  }else{
    return this.http.get<User[]>(this.url+"/searchSkill/"+searchCriteria.searchSkillName+"/"+pageNo)
    .pipe(map((data:User[])=>{
      return data;
    }), catchError(error => {
      return throwError( 'Service error!' );
    }) )
    
  }
  }
}
