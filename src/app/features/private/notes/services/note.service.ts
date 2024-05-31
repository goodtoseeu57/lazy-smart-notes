import { Injectable } from '@angular/core';
import { Observable, of, pipe, delay } from 'rxjs';
import { Note, notes } from '../notes';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  getNotes(): Observable<Note[]> {
    return of(notes).pipe(delay(1000))
  }
  constructor() { }
}
