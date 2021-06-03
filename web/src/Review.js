import ReactStars from "react-rating-stars-component";
import "bootstrap/dist/css/bootstrap.min.css";

function Review(props) {
  const review = props.review;
  return (
    <div className="box">
      <ReactStars
        count={5}
        size={15}
        activeColor="#ffd700"
        edit={false}
        value={review.stars}
      />
      {review.comment}
    </div>
  );
}

export default Review;
