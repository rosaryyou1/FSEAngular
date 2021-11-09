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

  constructor(private http : HttpClient) { }


 getUsersObservable(): Observable<User[]> {
  return this.http.get<User[]>(this.url)
    .pipe(map((data:User[])=>{
      return data;
    }), catchError(error => {
      return throwError( 'Service error!' );
    }) )
}

searchUsersByCriteria(searchCriteria:Criteria): Observable<User[]> {
  console.log(searchCriteria.searchName);
  return this.http.get<User[]>(this.url+"/searchName/"+searchCriteria.searchName)
    .pipe(map((data:User[])=>{
      return data;
    }), catchError(error => {
      return throwError( 'Service error!' );
    }) )
  }
}
