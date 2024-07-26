import React, { useState, useEffect } from 'react';
import { Container, Button, FormControl, InputGroup } from 'react-bootstrap';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleSave = (note) => {
    const timestamp = new Date().toLocaleString();
    if (currentNote) {
      setNotes(notes.map(n => (n.id === currentNote.id ? { ...n, ...note, timestamp } : n)));
    } else {
      setNotes([...notes, { id: Date.now(), ...note, timestamp }]);
    }
    setShowForm(false);
    setCurrentNote(null);
  };

  const handleEdit = (note) => {
    setCurrentNote(note);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const notesPerPage = 10;
  const totalPages = Math.ceil(filteredNotes.length / notesPerPage);
  const displayedNotes = filteredNotes.slice((currentPage - 1) * notesPerPage, currentPage * notesPerPage);

  return (
    <Container>
      <h1 className="my-4">Simple Note Taking App</h1>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search notes..."
          onChange={handleSearch}
          value={searchTerm}
        />
      </InputGroup>
      <Button className="mb-3" onClick={() => setShowForm(true)}>Add Note</Button>
      <NoteList
        notes={displayedNotes}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={setCurrentPage}
      />
      <NoteForm
        show={showForm}
        handleClose={() => setShowForm(false)}
        handleSave={handleSave}
        currentNote={currentNote}
      />
    </Container>
  );
};

export default App;
