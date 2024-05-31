import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { NotesComponent } from './notes/notes.component';
import { SharedModule } from '../../shared/shared.module';
import { NoteComponent } from './note/note.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './notes/store/reducers';
import { NotesEffects } from './notes/store/effects';
import { NoteService } from './notes/services/note.service';


@NgModule({
  declarations: [
    NotesComponent
  ],
  imports: [
    StoreModule.forFeature('notes', reducers),
    EffectsModule.forFeature([NotesEffects]),
    CommonModule, SharedModule, NoteComponent, AsyncPipe
  ],
  providers: [NoteService],
  exports: [SharedModule, NotesComponent]
})
export class PrivateModule { }
