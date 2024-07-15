import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PrivateComponent } from './private.component'
import { NotesComponent } from './notes/notes.component'
import { SharedModule } from '../../shared/shared.module'
import { CommonModule, AsyncPipe } from '@angular/common'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { NoteComponent } from './note/note.component'
import { NoteService } from './notes/services/note.service'
import { NotesEffects } from './notes/store/effects'
import { reducers } from './notes/store/reducers'

describe('PrivateComponent', () => {
  let component: PrivateComponent
  let fixture: ComponentFixture<PrivateComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotesComponent],
      imports: [
        EffectsModule.forRoot([]),
        StoreModule.forRoot({}),
        StoreModule.forFeature('notes', reducers),
        EffectsModule.forFeature([NotesEffects]),
        CommonModule,
        SharedModule,
        NoteComponent,
        AsyncPipe,
      ],
      providers: [NoteService],
    }).compileComponents()

    fixture = TestBed.createComponent(PrivateComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should have name', () => {
    expect(component.name).toEqual('private component')
  })
})
