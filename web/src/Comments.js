import React, { useState, useContext } from "react";
import ReactStars from "react-rating-stars-component";
import "./comments.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SomeContext from "./SomeContext";

function Comments() {
  const [stars, setStars] = useState(0);
  const [comment, setComment] = useState("");
  const { reviews, setReviews } = useContext(SomeContext);
  const [value, setvalue] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setReviews((r) => r.concat({ stars, comment }));
    setStars(1);
    console.log(stars);
    setvalue("");
  }

  return (
    <>
      <div className="review">
        <div className="stars">
          <ReactStars
            count={5}
            onChange={(stars) => {
              setStars(stars);
              console.log(stars);
            }}
            size={30}
            activeColor="#ffd700"
            value={stars}
          />
        </div>
        <h4> Comment :</h4>

        <form onSubmit={handleSubmit} className="form">
          <textarea
            id="comment"
            name="comment"
            value={value}
            onChange={(event) => setComment(event.target.value)}
          />

          <Button
            variant="secondary"
            className="submit"
            size="m"
            type="submit"
            active
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}

export default Comments;
