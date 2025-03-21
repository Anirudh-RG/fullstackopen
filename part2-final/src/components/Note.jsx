import React from 'react'

const Note = ({note,toggleImportant}) => {
    const label = note.importance? ' change to not important':'change to important';

  return (
    <div>
        <li>
        {note.content}
        {" "}
        <button onClick={toggleImportant}>{label}</button>
        </li>
    </div>
  )
}

export default Note