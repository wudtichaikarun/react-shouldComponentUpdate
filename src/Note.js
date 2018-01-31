import React, { Component } from 'react'

class NoteComponent extends Component {
  componentWillUpdate() {
    console.log('Note componentWillUpdate')
  }

  handleChange = event => {
    const { onNoteChange, index } = this.props

    onNoteChange(index, event.target.value)
  }

  render() {
    const { note } = this.props
    return (
      <li>
        <input
          type='text'
          defaultValue={note}
          onChange={this.handleChange} />
        <p>{note}</p>
      </li>
    )
  }
}

export default NoteComponent