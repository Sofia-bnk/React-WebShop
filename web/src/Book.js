import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import Comments from "./Comments";
import "./book.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SomeContext from "./SomeContext";
import ReactStars from "react-rating-stars-component";

function Book({ match }) {
  const [show, setShow] = useState(false);
  const [book, setBook] = useState({});
  const [reviews, setReviews] = useState([]);

  const fetchBook = useCallback(async () => {
    const response = await axios.get(
      `http://localhost:4000/books/${match.params.ISBN13}`
    );

    setBook(response.data.book);
  }, [match.params.ISBN13]);

  useEffect(() => {
    fetchBook();
  }, [fetchBook]);

  return (
    <SomeContext.Provider value={{ reviews, setReviews }}>
      <div className={"book"}>
        <div className="info">
          <img
            src={`https://image.bokus.com/images/${book.ISBN13}`}
            alt="book"
          />
          <h1>{book.Title}</h1>

          <p> Author : {book.Author}</p>
          <p> Price : {book.Price_kr} kr</p>
        </div>
        <div className="title">
          <h1>Customers Reviews</h1>
          <hr style={{ width: "50%" }}></hr>
        </div>
        <Button
          variant="secondary"
          size="lg"
          active
          className="btn"
          onClick={() => setShow(true)}
        >
          WRITE A REVIEW
        </Button>
        {show && <Comments />}

        {reviews.map((review) => (
          <div key={review.comment} className="box">
            <ReactStars
              count={5}
              size={15}
              activeColor="#ffd700"
              edit={false}
              value={review.stars}
            />
            {review.comment}
          </div>
        ))}
      </div>
    </SomeContext.Provider>
  );
}
export default Book;
