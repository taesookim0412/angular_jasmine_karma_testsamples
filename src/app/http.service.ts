import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Result{
  category: string,
  correct_answer: string,
  difficulty: string,
  incorrect_answers: string[],
  question: string,
  type: string
}

export interface TriviaResponse{
  response_code: number,
  [key:number]: Result
}


@Injectable({
  providedIn: 'root'
})
export class HttpService{
  data: any;

  constructor(private http: HttpClient) { }

  getFromTriviaFull() {
    this.getFromTrivia().subscribe((data) => {
      this.data = data;
    })
  }
  getFromTrivia(): Observable<any>{
    return this.http.get("https://opentdb.com/api.php?amount=10")
  }
}
