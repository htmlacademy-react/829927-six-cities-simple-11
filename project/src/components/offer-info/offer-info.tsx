import React from 'react';

function OfferInfo(): JSX.Element {
  return (
    <>
      <ul className="property__features">
        <li className="property__feature property__feature--entire">Apartment</li>
        <li className="property__feature property__feature--bedrooms">3 Bedrooms</li>
        <li className="property__feature property__feature--adults">Max 4 adults</li>
      </ul>
      <div className="property__price">
        <b className="property__price-value">&euro;120</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>
    </>
  );
}

export default OfferInfo;
