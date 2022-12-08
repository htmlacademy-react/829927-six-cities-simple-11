import React from 'react';

interface OfferGalleryProps {
  images: string[];
}

function OfferGallery({ images }: OfferGalleryProps): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map((image: string) => (
          <div className="property__image-wrapper" key={image}>
            <img className="property__image" src={`${image}`} alt="studio" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferGallery;
