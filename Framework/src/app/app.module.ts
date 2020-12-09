import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {QuestionComponent} from './question.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from './api.service';
import { QuestionsComponent } from './questions/questions.component';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { RegisterComponent } from './register/register.component';
import { AuthInterceptorService } from './auth-interceptor.service';


const routes =[
  { path:"question", component: QuestionComponent},
  { path:"question/:quizid", component: QuestionComponent},
  { path:"questions", component: QuestionsComponent},
  { path:"quiz", component : QuizComponent},
  { path:"register", component : RegisterComponent},
  { path:"", component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent,
    HomeComponent,
    NavbarComponent,
    QuizComponent,
    QuizzesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatListModule,
    RouterModule.forRoot(routes),
    MatToolbarModule
  ],
  providers: [ApiService, AuthService, {
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
