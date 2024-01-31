import { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import uuid from 'react-uuid';

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('notes')) || []
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    //save notes in local storage
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    setActiveNote(notes[0].id);
  }, []);

  const onAddNote = () => {
    console.log('new reminder is added');
    const newNote = {
      id: uuid(),
      title: '',
      content: 'Content',
      editDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  const onDeleteNote = (id) => {
    //(id)はクリックで削除しようとしているnote。このidとマッチしないnoteはTrueになるので残す（削除しない), Falseになったnoteを削除
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  };

  //activeになっているnoteのobjectを取得するためのfunction（idだけではなく）
  // id(uuid) has been assigned to activeNote. クリックしたnote(activeNote)とnote.idが適合したらreturn
  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  //updateNoteがsideBarに反映される
  const onUpdateNote = (updatedNote) => {
    //return [] of the new updatedNote
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    });
    setNotes(updatedNotesArray);
  };

  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        notes={notes}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      {/* object of activeNote that was obtained in line 31 */}
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}
2;
export default App;
