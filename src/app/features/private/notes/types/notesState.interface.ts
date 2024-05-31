import { Note } from '../notes'

export interface NotesState {
  isLoading: boolean,
  notes: Note[],
  error: string | null;
}
