import {Component} from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from './api.service';
import { Question } from './question';

@Component({
    selector: 'question',
    templateUrl: './question.component.html'
})
export class QuestionComponent{
    
    question = new Question;
    subscription!: Subscription;
    
    constructor(private apiSvc : ApiService){}
    
    resetQuestion(){
        this.question = new Question();
    }
    
    ngOnInit(){
        this.subscription = this.apiSvc.getselectQuestion().subscribe (q =>{
            this.question = q; 
        })
    }
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    post(){
        if(this.question.id)
            this.apiSvc.putQuestion(this.question);
        else 
            this.apiSvc.postQuestion(this.question);
    }

}