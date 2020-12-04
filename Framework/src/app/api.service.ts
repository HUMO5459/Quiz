import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';
import { Question } from './question';

@Injectable()  

export class ApiService{

  private selectedQuestion = new Subject<Question>();

  constructor (private http: HttpClient){

  }

  selectQuestion(question : Question){
      this.selectedQuestion.next(question);
  }

  getselectQuestion(){
    return this.selectedQuestion.asObservable();
  }

  postQuestion(question: Question){
    this.http.post('https://localhost:44303/api/Question',question)
      .subscribe(response=>{
        console.log(response);
      })
  } 

  putQuestion(question: Question){
    this.http.put('https://localhost:44303/api/Question/' + question.id, question)
      .subscribe(response=>{
        console.log(response);
      })
  } 
  
  gettQuestion(){
    return this.http.get('https://localhost:44303/api/Question')
  }
}