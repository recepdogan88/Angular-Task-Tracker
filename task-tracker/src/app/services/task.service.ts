import { Injectable } from '@angular/core';
import {Task} from "../Task"
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http"

@Injectable({
  providedIn: 'root'

})

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//   }),
// };

export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http :HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }

}