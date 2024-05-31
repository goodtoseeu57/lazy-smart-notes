import { Component, OnInit } from '@angular/core';
import { Note, notes } from './notes';
import { NoteService } from './services/note.service';
import { AppStateInterface } from '../../../types/appState.interface';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { errorSelector, isLoadingSelector, notesSelector } from './store/selectors';
import * as NotesActions from './store/actions';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  availableNotes$: Observable<Array<Note>>

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.availableNotes$ = this.store.pipe(select(notesSelector))
  }


  ngOnInit() {
    this.store.dispatch(NotesActions.getNotes())
  }

  onShowedNote(note: Note) {
    console.log(note)
  }


}
