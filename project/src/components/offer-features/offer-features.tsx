import React from 'react';

interface OfferFeaturesProps {
  features: string[];
}

function OfferFeatures({ features }: OfferFeaturesProps): JSX.Element {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {features.map((feature: string) => (
          <li className="property__inside-item" key={feature}>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OfferFeatures;
