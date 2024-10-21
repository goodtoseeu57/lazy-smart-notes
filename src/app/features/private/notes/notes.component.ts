import { Component, OnInit } from '@angular/core'
import { Note, notes } from './notes'
import { NoteService } from './services/note.service'
import { AppStateInterface } from '../../../types/appState.interface'
import { Store, select } from '@ngrx/store'
import { concatMap, delay, from, Observable, of, switchMap, take } from 'rxjs'
import {
  errorSelector,
  isLoadingSelector,
  notesSelector,
} from './store/selectors'
import * as NotesActions from './store/actions'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss',
})
export class NotesComponent implements OnInit {
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  availableNotes$: Observable<Array<Note>>

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.availableNotes$ = this.store.pipe(select(notesSelector))
  }

  messages: string[] = []

  // Simulating an observable that emits an array of messages
  data$: Observable<string[]> = of([
    'Message 1',
    'Message 2',
    'Message 3',
    'Message 4',
  ])

  ngOnInit() {
    this.store.dispatch(NotesActions.getNotes())
    this.availableNotes$.pipe(take(1)).subscribe((notes) => {
      this.justAnotherNote()
    })

    this.data$
      .pipe(
        switchMap((messages: string[] | null) => {
          // Only proceed if the messages are not null or undefined
          if (messages != null) {
            return from(messages).pipe(
              concatMap((message) => of(message).pipe(delay(1000))), // Add a delay between each message
            )
          } else {
            return of() // Return an empty observable if messages are null/undefined
          }
        }),
      )
      .subscribe((message) => {
        this.messages = [...this.messages, message] // Append each message to the array
      })
  }

  onShowedNote(note: Note) {
    console.log(note)
  }

  isYoutubeUrl(url: string): boolean {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/
    return youtubeRegex.test(url)
  }

  justAnotherNote() {
    confirm('Are you sure?')
  }
}
