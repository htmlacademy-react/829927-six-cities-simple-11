import React, { useState } from 'react';

function ReviewForm(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: '',
    review: '',
  });

  const MAX_RATING = 5;
  const MIN_REVIEW_LENGTH = 50;

  const handleFormDataChange = <T extends { name: string; value: string }>(evt: React.ChangeEvent<T>) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const isSumbitBtnDisabled = !formData.rating || !formData.review || formData.review.length < MIN_REVIEW_LENGTH;

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {new Array(MAX_RATING).fill('').map((el, index) => {
          const value = MAX_RATING - index;

          return (
            <React.Fragment key={value}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={value}
                id={`${value}-stars`}
                type="radio"
                onChange={handleFormDataChange}
              />
              <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
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
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleFormDataChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSumbitBtnDisabled}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
