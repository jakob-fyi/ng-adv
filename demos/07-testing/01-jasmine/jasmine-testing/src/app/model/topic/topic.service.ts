import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Topic } from "./topic";
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: "root"
})
export class TopicService {
  constructor(private httpClient: HttpClient) { }

  getTopics(): Observable<Topic[]> {
    return this.httpClient.get<Topic[]>(environment.apiUrl + "topics")
  }

  getTopic(id: number): Observable<Topic> {
    return this.httpClient.get<Topic>(environment.apiUrl + "topics" + id);
  }

  insertTopic(Topic: Topic): Observable<any> {
    return this.httpClient.post<Topic>(environment.apiUrl + "topics", Topic);
  }

  updateTopic(Topic: Topic): Observable<any> {
    return this.httpClient.put<Topic>(environment.apiUrl + "topics", Topic);
  }

  deleteTopic(id: number): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + "topics" + id);
  }
}
