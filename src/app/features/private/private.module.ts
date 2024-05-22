import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes/notes.component';
import { SharedModule } from '../../shared/shared.module';
import { NoteComponent } from './note/note.component';


@NgModule({
  declarations: [
    NotesComponent
  ],
  imports: [
    CommonModule, SharedModule, NoteComponent
  ],
  exports: [SharedModule]
})
export class PrivateModule { }
