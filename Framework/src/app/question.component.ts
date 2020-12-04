import {Component} from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'question',
    templateUrl: './question.component.html'
})
export class QuestionComponent{
    
    question = {
        text : '',
        correctAnswer : '',
        wrongAnswers: ['','','']
    }
    
    constructor(private apiSvc : ApiService){}
    
    post(){
        this.apiSvc.postQuestion(this.question);
    }

}