import { Component, OnInit } from '@angular/core';
import { Note, notes } from './notes';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent implements OnInit {
  protected availableNotes!: Array<Note>

  constructor() {

  }
  ngOnInit() {
    this.availableNotes = notes
  }


}
