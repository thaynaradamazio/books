import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function EditBook() {
  const params = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({});

  useEffect(() => {
    fetch(`/api/books/${params.id}`, {
      method: "GET"
    })
      .then((res) => res.json())
      .then((json) => {
        setBook(json.book);
      });
  }, [params]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/api/books/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(book)
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("json", json);
      });
    navigate("/books");
  }

  return (
    <div>
      <h1>Edit Book</h1>

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

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
