import React, { Component } from 'react'
import Notes from './Notes'


class App extends Component {
  state = {
    notes: [
      'Note#1',
      'Note#2',
      'Note#3'
    ]
  }

  onNoteChange = (index, note) => {
    this.setState(prevState => {
      const { notes } = prevState

      return {
        notes: [
          ...notes.slice(0, index),
          note,
          ...notes.slice(index + 1)
        ]
      }
    })
  }
  render() {
    return (
     <Notes {...this.state} onNoteChange={this.onNoteChange} />
    )
  }
}

export default App;
