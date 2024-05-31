import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../notes/notes';
import { SharedModule } from '../../../shared/shared.module';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'note',
  standalone: true,
  imports: [SharedModule, AsyncPipe],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss'
})
export class NoteComponent {
  @Input({ required: true }) note!: Note
  @Output() showedNote = new EventEmitter<Note>()

  constructor() {
  }

  showNote(note: Note) {
    this.showedNote.emit(note)
  }

  anotherNote(note: Note) {
    note.description = 'my d'
    this.showedNote.emit(note)
  }


}
