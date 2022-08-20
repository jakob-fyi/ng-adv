import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CommentService } from '../comment.service';
import { deleteComment, deleteCommentFailure } from './editor.actions';
import {
  loadComments,
  loadCommentsFailure,
  saveComment,
  saveCommentFailure,
} from './editor.actions';

@Injectable()
export class EditorEffects {
  constructor(private actions$: Actions, private service: CommentService) {}

  loadDemos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadComments),
      mergeMap(() =>
        this.service.getComments().pipe(
          map((comments) => ({
            type: '[Comments] loadComments Success',
            items: comments,
          })),
          catchError((err) => of(loadCommentsFailure({ err })))
        )
      )
    )
  );

  saveComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveComment),
      mergeMap((action) =>
        this.service.saveComment(action.item).pipe(
          map((comment) => ({
            type: '[Comments] saveComment Success',
            item: comment,
          })),
          catchError((err) => of(saveCommentFailure({ err })))
        )
      )
    )
  );

  deleteComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteComment),
      mergeMap((action) =>
        this.service.deleteComment(action.item).pipe(
          map(() => ({
            type: '[Comments] deleteComment Success',
            item: action.item,
          })),
          catchError((err) => of(deleteCommentFailure({ err })))
        )
      )
    )
  );
}