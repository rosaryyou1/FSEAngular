import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import {MatTable} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { User } from '../model/user.model';
import {HttpClient} from '@angular/common/http';
import { SearchserviceService } from '../service/searchservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
 
//const ELEMENT_DATA: User[] = [];
const SKILLS = [
  'Java', 'Angular', 'Spring', 'Hibernate', 'Oracle'  
];

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  public users:User[] = [];
  public allSkills:Array<string>=[];
  public myForm:FormGroup;
  
  //@ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public serivce: SearchserviceService) { 
    this.allSkills = SKILLS;
    this.myForm = new FormGroup({
      searchName: new FormControl('', [
        Validators.required
      ]),
      searchAssociateId: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      searchSkillName: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {
    this.serivce.getUsersObservable().subscribe
    (
      (response:User[])=>{
        this.users = response;
      },
      (error) =>console.log(error)
    );

  }


  onSubmit(){
    this.serivce.searchUsersByCriteria(this.myForm.value).subscribe
    (
      (response:User[])=>{
        this.users = response;
      },
      (error) =>console.log(error)
    );
  }

}
