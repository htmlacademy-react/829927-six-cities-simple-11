import React, { useEffect, useRef } from 'react';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { IOffer } from '../../types/offer';
import useMap from '../../hooks/useMap';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import cn from 'classnames';
import useAppSelector from '../../hooks/useAppSelector';
import { getLatLongByCity } from '../../utils/offer';
import { getCity } from '../../store/reducers/offers/selectors';

interface MapProps {
  type: 'offer-page' | 'main-page';
  offers: IOffer[];
  activeCardId: number | null;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({ type, offers, activeCardId }: MapProps): JSX.Element {
  const city = useAppSelector(getCity);

  const mapRef = useRef(null);
  const map = useMap(mapRef, getLatLongByCity(city));

  useEffect(() => {
    if (map) {
      const cityCoords = getLatLongByCity(city);
      map.setView([cityCoords.location.latitude, cityCoords.location.longitude], cityCoords.location.zoom);

      offers.forEach((offer: IOffer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker.setIcon(activeCardId !== null && offer.id === activeCardId ? currentCustomIcon : defaultCustomIcon).addTo(map);
      });
    }
  }, [map, offers, activeCardId, city]);

  return (
    <section
      className={cn('map', {
        'cities__map': type === 'main-page',
        'property__map': type === 'offer-page',
      })}
      ref={mapRef}
    />
  );
}

export default Map;
