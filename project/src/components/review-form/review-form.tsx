import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH, RATING_LABELS } from '../../const';
import { useActions } from '../../hooks/useActions';
import useAppSelector from '../../hooks/useAppSelector';

function ReviewForm(): JSX.Element {
  const { postReview } = useActions();

  const { isReviewLoading } = useAppSelector((state) => state.OFFER);

  const [formData, setFormData] = useState({
    comment: '',
    rating: '',
  });

  const params = useParams();
  const { id } = params;

  const handleFormDataChange = <T extends { name: string; value: string }>(evt: React.ChangeEvent<T>) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const isSumbitBtnDisabled =
    !formData.rating ||
    !formData.comment ||
    formData.comment.length < MIN_REVIEW_LENGTH ||
    formData.comment.length < MAX_REVIEW_LENGTH ||
    isReviewLoading;

  const handleFormSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    if (id) {
      postReview({ id: id, review: { comment: formData.comment, rating: +formData.rating } });
      setFormData({ comment: '', rating: '' });
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {RATING_LABELS.map((element, index) => {
          const value = index + 1;

          return (
            <React.Fragment key={value}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={value}
                id={`${value}-stars`}
                type="radio"
                onChange={handleFormDataChange}
                checked={value === +formData.rating}
              />
              <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={element}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>
          );
        })}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleFormDataChange}
        value={formData.comment}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSumbitBtnDisabled} onClick={handleFormSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
