import { createReducer, on } from '@ngrx/store'
import { NotesState } from '../types/notesState.interface'
import * as NotesActions from './actions'

export const initialState: NotesState = {
  isLoading: false,
  notes: [],
  error: null,
}

export const reducers = createReducer(
  initialState,
  on(NotesActions.getNotes, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(NotesActions.getNotesSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    notes: action.notes,
  })),
  on(NotesActions.getNotesFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(NotesActions.addNote, (state, { payload }) => ({
    ...state,
    notes: [...state.notes, payload],
  })),
)
