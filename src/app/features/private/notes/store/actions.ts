import { createAction, props } from "@ngrx/store";
import { Note } from "../notes";

export const getNotes = createAction(`[Notes] Get Notes`)

export const getNotesSuccess = createAction(`Note`, props<{ notes: Note[] }>())
export const getNotesFailure = createAction(`Note failure`, props<{ error: string }>())
