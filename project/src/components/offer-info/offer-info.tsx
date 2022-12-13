import React from 'react';

interface OfferInfoProps {
  type: string;
  bedrooms: number;
  adults: number;
  price: number;
}

function OfferInfo({ type, bedrooms, adults, price }: OfferInfoProps): JSX.Element {
  return (
    <>
      <ul className="property__features">
        <li className="property__feature property__feature--entire">{type}</li>
        <li className="property__feature property__feature--bedrooms">{bedrooms} Bedrooms</li>
        <li className="property__feature property__feature--adults">Max {adults} adults</li>
      </ul>
      <div className="property__price">
        <b className="property__price-value">&euro;{price}</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>
    </>
  );
}

export default OfferInfo;
