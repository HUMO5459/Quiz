import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Question } from '../question';

@Component({
    templateUrl: './questions.component.html',
    selector: 'questions'
})
export class QuestionsComponent{
    
    questions!: any;

    constructor(public apiSvc : ApiService, private route: ActivatedRoute){}
    
    ngOnInit(){
        let quizid = this.route.snapshot.paramMap.get('quizid');
        this.apiSvc.getQuestion(quizid).subscribe(result =>{
            this.questions=result;
        });
        this.apiSvc.getNewQuestion().subscribe(newQuestion =>{
            this.questions.push(newQuestion);
        });
    }

}