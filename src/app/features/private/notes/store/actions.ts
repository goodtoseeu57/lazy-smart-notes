import { createAction, props } from '@ngrx/store'
import { Note } from '../notes'

export const getNotes = createAction(`[Notes] Get Notes`)

export const getNotesSuccess = createAction(`Note`, props<{ notes: Note[] }>())
export const getNotesLoading = createAction(`Note loading`)
export const getNotesFailure = createAction(
  `Note failure`,
  props<{ error: string }>(),
)

export const addNote = createAction(`Add note`, props<{ payload: Note }>())
