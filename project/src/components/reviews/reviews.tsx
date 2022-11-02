import React from 'react';
import ReviewItem from '../review-item/review-item';

interface ReviewsProps {
  reviews: { id: 1 }[];
}

function Reviews({ reviews }: ReviewsProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">1</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review: { id: number }) => (
          <ReviewItem review={review} key={review.id} />
        ))}
      </ul>
    </>
  );
}

export default Reviews;
