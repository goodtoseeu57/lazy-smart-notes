import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NoteComponent } from './note.component'
import { NotesComponent } from '../notes/notes.component'
import { CommonModule, AsyncPipe } from '@angular/common'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { SharedModule } from '../../../shared/shared.module'
import { NoteService } from '../notes/services/note.service'
import { NotesEffects } from '../notes/store/effects'
import { reducers } from '../notes/store/reducers'

fdescribe('NoteComponent', () => {
  let component: NoteComponent
  let fixture: ComponentFixture<NoteComponent>

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

    fixture = TestBed.createComponent(NoteComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    component.note = {
      title: 'title',
      description: 'description',
      hashCode: 'myhascode',
    }
    fixture.detectChanges()
    const compiled = fixture.nativeElement
    compiled.querySelector('p').textContent = 'title'
    expect(component).toBeTruthy()
  })

  it('should have name', () => {
    component.note = {
      title: 'title',
      description: 'description',
      hashCode: 'myhascode',
    }
    fixture.detectChanges()
    expect(component.note).toEqual({
      title: 'title',
      description: 'description',
      hashCode: 'myhascode',
    })
  })

  it('should emit show note', () => {
    spyOn(component.showedNote, 'emit')
    component.showNote({
      title: 'title',
      description: 'description',
      hashCode: 'myhascode',
    })

    expect(component.showedNote.emit).toHaveBeenCalled()
    expect(component.showedNote.emit).toHaveBeenCalledWith({
      title: 'title',
      description: 'description',
      hashCode: 'myhascode',
    })
  })
})
