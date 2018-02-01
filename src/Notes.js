import React, { PureComponent } from 'react'
import Note from './Note'

class NotesComponent extends PureComponent {

  render() {
    const { onNoteChange, notes } = this.props
    return(
      <ul>
        {
          notes.map(
            (note, index) => (
              <Note 
                key={index}
                index={index}
                note={note}
                onNoteChange={onNoteChange} />
            )
          )
        }
      </ul>
    )
  }
}

export default NotesComponent