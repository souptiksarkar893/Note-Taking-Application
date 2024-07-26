import React from 'react';
import { Card, Button } from 'react-bootstrap';

const NoteItem = ({ note, handleEdit, handleDelete }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>{note.content}</Card.Text>
        <Card.Text><small className="text-muted">{note.timestamp}</small></Card.Text>
        <Button variant="warning" onClick={() => handleEdit(note)}>Edit</Button>{' '}
        <Button variant="danger" onClick={() => handleDelete(note.id)}>Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default NoteItem;
