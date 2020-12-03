import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()  

export class ApiService{

  constructor (private http: HttpClient){

  }

  postQuestion(question: { text: string; }){
    this.http.post('https://localhost:44303/api/Question',question)
      .subscribe(response=>{
        console.log(response);
      })
  }
}