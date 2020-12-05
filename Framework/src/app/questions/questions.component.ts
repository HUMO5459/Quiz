import {Component} from '@angular/core';
import { ApiService } from '../api.service';

@Component({
    templateUrl: './questions.component.html',
    selector: 'questions'
})
export class QuestionsComponent{
    
    questions!: any;

    constructor(public apiSvc : ApiService){}
    
    ngOnInit(){
      this.apiSvc.gettQuestion().subscribe(result =>{
            this.questions=result;
        })
    }

}