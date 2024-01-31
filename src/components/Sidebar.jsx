import React from 'react';
import './Sidebar.css';

const Sidebar = ({
  onAddNote,
  notes,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const sortedNotes = notes.sort((a, b) => b.editDate - a.editDate);

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Reminders</h1>
        <button onClick={onAddNote}>ADD</button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map((note) => (
          <div
            key={note.id}
            className={`app-sidebar-note ${note.id === activeNote && 'active'}`}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button onClick={() => onDeleteNote(note.id)}>DELETE</button>
            </div>
            <p>{note.content}</p>
            <small>
              {new Date(note.editDate).toLocaleDateString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
