import React from 'react';
import { IReview } from '../../types/review';
import ReviewItem from '../review-item/review-item';

interface ReviewsProps {
  reviews: IReview[];
}

function Reviews({ reviews }: ReviewsProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">1</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review: IReview) => (
          <ReviewItem review={review} key={review.id} />
        ))}
      </ul>
    </>
  );
}

export default Reviews;
