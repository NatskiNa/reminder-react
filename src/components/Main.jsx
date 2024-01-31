import React from 'react';
import './Main.css';
import Markdown from 'react-markdown';

const Main = ({ activeNote, onUpdateNote }) => {
  const onEditNote = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value, //key of either title or content
      editDate: Date.now(),
    });
  };

  if (!activeNote) {
    return (
      <div className="no-active-note">There is no reminder is selected</div>
    );
  }

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          value={activeNote.title}
          onChange={(e) => onEditNote('title', e.target.value)}
        />
        <textarea
          id="content"
          placeholder="Add new reminder"
          value={activeNote.content}
          onChange={(e) => onEditNote('content', e.target.value)}
        ></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <Markdown className="markdown-preview">{activeNote.content}</Markdown>
      </div>
    </div>
  );
};

export default Main;
