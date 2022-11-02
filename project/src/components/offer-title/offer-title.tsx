import React, { PropsWithChildren } from 'react';

function OfferTitle({ children }: PropsWithChildren): JSX.Element {
  return (
    <div className="property__name-wrapper">
      <h1 className="property__name">{children}</h1>
    </div>
  );
}

export default OfferTitle;
