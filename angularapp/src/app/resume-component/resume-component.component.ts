import { Component, OnInit } from '@angular/core';
import userData from '../user.json';
import eduData from "../edu.json";
import projData from "../proj.json";
import {HttpClient} from "@angular/common/http";

interface user {
  id: String;
  name: String;
  email: String;
  address: String;
  bio: String;
  skills: String;
  mobile_number: String;
  hobbies: String;
}

interface edu{
  id: String;
  course: String;
  course_type: String;
  institute: String;
  percentage: String;
  years: String;
}

interface proj{
  id:String;
  description: String;
  resources: String;
}

@Component({
  selector: 'app-wheels',
  templateUrl: './resume-component.component.html',
  styleUrls: ['./resume-component.component.scss']
})


export class ResumeComponent implements OnInit {

  constructor( private http: HttpClient ) {}

  ngOnInit(): void {
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe(
      Response =>{
        if(Response)
          console.log(Response);
      }
    );

  }

  user: user[] = userData;
  edu: edu[] = eduData;
  proj: proj[] = projData;

}
