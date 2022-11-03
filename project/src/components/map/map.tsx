import React from 'react';

interface MapProps {
  activeCardId: number | null;
}

function Map({ activeCardId }: MapProps): JSX.Element {
  return <section className="cities__map map"></section>;
}

export default Map;
