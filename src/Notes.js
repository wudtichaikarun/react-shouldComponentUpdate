import React, { Component } from 'react'
import Note from './Note'

class NotesComponent extends Component {

  shouldComponentUpdate = (nextProps) => {
    return this.props.notes !== nextProps.notes
  }

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