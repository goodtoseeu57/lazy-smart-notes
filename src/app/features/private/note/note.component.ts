import { Component, Input } from '@angular/core';
import { Note } from '../notes/notes';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'note',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss'
})
export class NoteComponent {
  @Input({ required: true }) note!: Note
}
