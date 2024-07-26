import React from 'react';
import NoteItem from './NoteItem';
import Pagination from './Pagination';

const NoteList = ({ notes, handleEdit, handleDelete, currentPage, totalPages, handlePageChange }) => {
  return (
    <div>
      {notes.map(note => (
        <NoteItem
          key={note.id}
          note={note}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default NoteList;
