import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Books(props) {
  const [books, setBooks] = useState([]);

  useEffect(fetchBooks, []);

  function fetchBooks() {
    (async () => {
      setBooks((await axios("http://localhost:4000/books")).data.books);
    })();
  }

  return (
    <div className={props.className}>
      {books.map((book) => (
        <h1 key={book.ISBN13}>
          <img
            src={`https://image.bokus.com/images/${book.ISBN13}`}
            alt="book"
          />
          <div>
            <Link to={`/${book.ISBN13}`}> {book.Title} </Link>
          </div>
        </h1>
      ))}
    </div>
  );
}

export default styled(Books)`
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: space-between;
  grid-row-gap: 10px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 6rem;
  img {
    width: 1 10vw;
    height: auto;
    border: 1px;
    cursor: pointer;
  }
`;
