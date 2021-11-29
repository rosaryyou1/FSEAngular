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
import { Skills } from '../model/skills-class.model';
import { TechnicalSkills } from '../model/technical-skills.model';
import { SkillFactoryClass } from '../model/skill-factory-class.model';
import 'lodash';
declare var _:any;
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
  public pageUsers:User[] = [];
  public users:User[] = [];
  public allSkills:Array<string>=[];
  public myForm:FormGroup;
  public isMore = false;
  public noDataMsg = "";
  public pageNo = 1;
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
   /* this.serivce.getUsersObservable().subscribe
    (
      (response:User[])=>{
        this.users = response;
        SearchComponent.constructSkills(this.users);
        console.log(this.users)
      },
      (error) =>console.log(error)
    );*/

  }

  static constructSkills(users:User[]) : void{
    for(var i=0;i<users.length;i=i+1){
      users[i].TechnicalSkills = SkillFactoryClass.constructTechSkill(users[i].Skills,'Tech');
      users[i].NonTechnicalSkills = SkillFactoryClass.constructNonTechSkill(users[i].Skills,'Non-Tech');
      users[i].TechnicalSkills = _.sortBy(users[i].TechnicalSkills,['Level']);
      users[i].NonTechnicalSkills = _.sortBy(users[i].NonTechnicalSkills,['Level']);
    }
 }
  onSubmit(){
    this.serivce.searchUsersByCriteria(this.myForm.value,this.pageNo).subscribe
    (
      (response:User[])=>{
         this.pageUsers= response;
         this.users = this.users.concat(this.pageUsers);
        console.log(this.users)
        if(this.pageUsers.length>0){
          this.isMore = true;
        }else{
          this.isMore = false;
        }
        if(this.users.length==0){
          this.noDataMsg = "Error or No Data";
        }
        SearchComponent.constructSkills(this.users);
        console.log(this.users)
      },
      (error) => {
        this.isMore = false;
        this.noDataMsg = "Error or No Data";
        console.log(error);
      }
    );
  }

  onMore(){
    this.pageNo = this.pageNo+1;
    this.onSubmit();
  }

}
