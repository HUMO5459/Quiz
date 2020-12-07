import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Question } from './question';
import { Quiz } from './quiz';

@Injectable()

export class ApiService {

  private selectedQuestion = new Subject<Question>();
  private selectedQuiz = new Subject<Quiz>();
  private newQuiz = new Subject<Quiz>();
  private newQuestion = new Subject<Question>();

  constructor(private http: HttpClient) {

  }

  ///////////////////////////////////////////////////
  selectQuestion(question: Question) {
    this.selectedQuestion.next(question);
  }
  getselectQuestion() {
    return this.selectedQuestion.asObservable();
  }

  ///////////////////////////////////////////////////
  selectQuiz(quiz: Quiz) {
    this.selectedQuiz.next(quiz);
  }
  getselectQuiz() {
    return this.selectedQuiz.asObservable();
  }

  ///////////////////////////////////////////////////
  getNewQuiz() {
    return this.newQuiz.asObservable();
  }
  addNewQuiz(quiz: Quiz) {
    return this.newQuiz.next(quiz);
  }

  ///////////////////////////////////////////////////
  getNewQuestion() {
    return this.newQuestion.asObservable();
  }
  addNewQuestion(question: Question) {
    return this.newQuestion.next(question);
  }

  ///////////////////////////////////////////////////
  postQuestion(question: Question) {
    this.http.post('https://localhost:44303/api/Question', question)
      .subscribe(response => {
        this.addNewQuestion(response as Question);
        console.log(response);
      })
  }

  putQuestion(question: Question) {
    this.http.put('https://localhost:44303/api/Question/' + question.id, question)
      .subscribe(response => {
        console.log(response);
      })
  }
  /////////////////////////////////////////////////////////////////////////
  postQuiz(quiz: Quiz) {
    this.http.post('https://localhost:44303/api/quizzes', quiz)
      .subscribe(response => {
        this.addNewQuiz(response as Quiz);
        console.log(response);
      })
  }
  putQuiz(quiz: Quiz) {
    this.http.put('https://localhost:44303/api/quizzes/' + quiz.id, quiz)
      .subscribe(response => {
        console.log(response);
      })
  }

  /////////////////////////////////////////////////////////////////////////
  getQuestion(quizid: string | null) {
    return this.http.get(`https://localhost:44303/api/Question/${quizid}`)
  }
  getQuizzes() {
    return this.http.get('https://localhost:44303/api/quizzes')
  }

  /////////////////////////////////////////////////////////////////////////

}