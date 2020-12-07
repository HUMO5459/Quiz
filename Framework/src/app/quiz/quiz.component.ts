import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from '../api.service';
import { Quiz } from '../quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quiz = new Quiz;
  subscription = new Subscription();
  constructor(private apiSvc: ApiService, private router : Router) { }

  post() {
    if (this.quiz.id)
      this.apiSvc.putQuiz(this.quiz);
    else
      this.apiSvc.postQuiz(this.quiz);
    
    this.resetQuiz();
  }

  resetQuiz() {
    this.quiz = new Quiz();
  }

  ngOnInit() {
    this.subscription = this.apiSvc.getselectQuiz().subscribe(q => {
      this.quiz = q;
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  navigateToQuestions() {
      this.router.navigate(['/question/' + this.quiz.id]);
  }
 
}
