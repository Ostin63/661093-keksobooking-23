// eslint-disable-next-line no-redeclare
/* global L:readonly */
import {
  AD_FORM
} from './constants.js';

const START_COORDS = {
  LAT: 35.68378,
  LNG: 139.75423,
};

const ADDRESS = AD_FORM.querySelector('#address');
const MAP = L.map('map-canvas');

const addMaps = (callback) => {
  MAP.on('load', callback)
    .setView({
      lat: START_COORDS.LAT,
      lng: START_COORDS.LNG,
    }, 12);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(MAP);
};

const mainPinIcon = L.icon({
  iconUrl: 'leaflet/images/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const pinMarkerRed = L.marker(
  {
    lat: START_COORDS.LAT,
    lng: START_COORDS.LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const addAddress = (markerName) => {
  const pinCoords = markerName.getLatLng();
  ADDRESS.value = `${(pinCoords.lat).toFixed(5)}, ${(pinCoords.lng).toFixed(5)}`;
};

const resetPopup = () => {
  const popap = document.querySelector('.leaflet-popup');
  if (popap) {
    popap.remove();
  }
};

const addAddressValue = () => {
  ADDRESS.value = `${START_COORDS.LAT}, ${START_COORDS.LNG}`;
};

pinMarkerRed.addTo(MAP);

const resetMap = () => {
  pinMarkerRed.setLatLng({
    lat: START_COORDS.LAT,
    lng: START_COORDS.LNG,
  });

  MAP.setView({
    lat: START_COORDS.LAT,
    lng: START_COORDS.LNG,
  }, 12);

  resetPopup();
  addAddressValue();
};

const markers = [];

const addPins = (points, carts) => {
  points.forEach((point) => {
    const { lat, lng } = point.location;
    const iconPin = L.icon({
      iconUrl: 'leaflet/images/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });
    const markerPin = L.marker(
      {
        lat,
        lng,
      },
      {
        iconPin,
      });

    markerPin
      .addTo(MAP)
      .bindPopup(carts(point),
        {
          keepInView: true,
        },
      );
    markers.push(markerPin);
  });
};

const removePins = () => {
  markers.forEach((marker) => marker.remove());
};

pinMarkerRed.on('moveend', (evt) => {
  addAddress(evt.target);
});

export {
  pinMarkerRed,
  addMaps,
  addAddress,
  addPins,
  resetMap,
  removePins
};
