import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import Comments from "./Comments";
import Review from "./Review";
import "./book.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SomeContext from "./SomeContext";
import ReactStars from "react-rating-stars-component";

function Book({ match }) {
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

  function calculateAverage(reviews) {
    if (reviews.length === 0) {
      return 0;
    }
    const stars = reviews.map((r) => r.stars);
    const totalSum = stars.reduce(
      (partialSum, starValue) => partialSum + starValue,
      0
    );

    return totalSum / reviews.length;
  }

  return (
    <SomeContext.Provider value={{ reviews, setReviews }}>
      <div className={"book"}>
        <div className="info">
          <img
            src={`https://image.bokus.com/images/${book.ISBN13}`}
            alt="book"
          />
          <h1>{book.Title}</h1>
          <div className="rating">
            <ReactStars
              classNames="average"
              count={5}
              size={20}
              activeColor="#ffd700"
              edit={false}
              value={calculateAverage(reviews)}
              key={reviews.length}
            />
            {reviews.length === 0 ? (
              <span>(No Reviews)</span>
            ) : (
              <span>({reviews.length})</span>
            )}
          </div>
          <p> Author : {book.Author}</p>
          <p> Price : {book.Price_kr} kr</p>
        </div>
        <div className="title">
          <h1>Customers Reviews</h1>
          <hr style={{ width: "50%" }}></hr>
        </div>

        <Comments />

        {reviews.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </div>
    </SomeContext.Provider>
  );
}
export default Book;
