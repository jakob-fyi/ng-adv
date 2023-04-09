import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentItem } from './comment.model';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  url = environment.apiUrl + 'comments';

  constructor(private http: HttpClient) { }

  saveComment(item: CommentItem) {
    if (item.id === undefined) {
      return this.http.post<CommentItem>(this.url, item);
    } else {
      return this.http.put<CommentItem>(`${this.url}/${item.id}`, item);
    }
  }

  deleteComment(item: CommentItem) {
    return this.http.delete<CommentItem>(`${this.url}/${item.id}`);
  }

  getComments() {
    return this.http.get<CommentItem[]>(this.url);
  }

  getComment(id: number) {
    return this.http.get<CommentItem>(`${this.url}/${id}`);
  }
}
