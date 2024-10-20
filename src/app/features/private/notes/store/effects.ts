import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { NoteService } from '../services/note.service'
import * as NotesActions from './actions'
import { catchError, map, mergeMap, of } from 'rxjs'
import { Note } from '../notes'

@Injectable()
export class NotesEffects {
  getNotes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NotesActions.getNotes),
      mergeMap(() => {
        return this.noteService.getNotes().pipe(
          map((notes) => NotesActions.getNotesSuccess({ notes })),
          catchError((error) =>
            of(NotesActions.getNotesFailure({ error: error.message })),
          ),
        )
      }),
    ),
  )

  addNote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NotesActions.addNote),
      mergeMap((action) => {
        const mockNote: Note = {
          title: action.payload.title,
          description: action.payload.description,
          hashCode: action.payload.hashCode,
        }
        return of(mockNote).pipe(
          map(() => NotesActions.getNotesSuccess({ notes: [mockNote] })),
          catchError((error) =>
            of(NotesActions.getNotesFailure({ error: error.message })),
          ),
        )
      }),
    ),
  )
  constructor(
    private actions$: Actions,
    private noteService: NoteService,
  ) {}
}
