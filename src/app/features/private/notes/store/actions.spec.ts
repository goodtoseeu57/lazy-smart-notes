import * as NoteActions from './actions'

describe('Note Actions', () => {
  it('should create loadNotes action', () => {
    const action = NoteActions.getNotes()
    expect(action.type).toBe('[Notes] Load Notes')
  })
})
