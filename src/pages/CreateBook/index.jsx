import React, { useState } from 'react';
import style from './create_book.module.css';

import { useNavigate } from 'react-router-dom';

export function CreateBook() {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    name: '',
    author: '',
    imgUrl: '',
    description: '',
    year: '',
  });

  function handleSubmit(event) {
    event.preventDefault();

    fetch('api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });

    navigate('/books');
  }

  return (
    <div>
      <h1>Create Book</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titulo"
          value={book.name}
          onChange={(event) => setBook({ ...book, name: event.target.value })}
        />
        <input
          type="text"
          placeholder="Autor"
          value={book.author}
          onChange={(event) => setBook({ ...book, author: event.target.value })}
        />
        <input
          type="text"
          placeholder="Imagem"
          value={book.imgUrl}
          onChange={(event) => setBook({ ...book, imgUrl: event.target.value })}
        />
        <input
          type="number"
          placeholder="Ano"
          value={book.year}
          onChange={(event) => setBook({ ...book, year: event.target.value })}
        />
        <textarea
          type="text"
          placeholder="Descrição"
          value={book.description}
          onChange={(event) =>
            setBook({ ...book, description: event.target.value })
          }
        />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
