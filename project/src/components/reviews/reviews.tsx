import React from 'react';
import useAppSelector from '../../hooks/useAppSelector';
import { getReviewsErrorStatus } from '../../store/reducers/offer/selectors';
import { IReview } from '../../types/review';
import ErrorMessage from '../error-message/error-message';
import ReviewItem from '../review-item/review-item';

interface ReviewsProps {
  reviews: IReview[];
}

function Reviews({ reviews }: ReviewsProps): JSX.Element {
  const isReviewsError = useAppSelector(getReviewsErrorStatus);

  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      {isReviewsError && <ErrorMessage />}
      {!isReviewsError && (
        <ul className="reviews__list">
          {reviews.map((review: IReview) => (
            <ReviewItem review={review} key={review.id} />
          ))}
        </ul>
      )}
    </>
  );
}

export default Reviews;
