import React from 'react';
import { GALLERY_PHOTO_COUNT } from '../../const';

interface OfferGalleryProps {
  images: string[];
}

function OfferGallery({ images }: OfferGalleryProps): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.slice(0, GALLERY_PHOTO_COUNT).map((image: string) => (
          <div className="property__image-wrapper" key={image}>
            <img className="property__image" src={`${image}`} alt="studio" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferGallery;
