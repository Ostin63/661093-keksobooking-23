// eslint-disable-next-line no-redeclare
/* global L:readonly */
import {
  AD_FORM,
  ACCURACY,
  ZOOM_START
} from './constants.js';

const START_COORDS = {
  LAT: 35.68378,
  LNG: 139.75423,
};

const MAIN_PIN_ICON = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const ICON_PIN = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const ADDRESS = AD_FORM.querySelector('#address');
const MAP = L.map('map-canvas');

const addMaps = (callback) => {
  MAP.on('load', callback)
    .setView({
      lat: START_COORDS.LAT,
      lng: START_COORDS.LNG,
    }, ZOOM_START);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(MAP);
};

const pinMarkerRed = L.marker(
  {
    lat: START_COORDS.LAT,
    lng: START_COORDS.LNG,
  },
  {
    draggable: true,
    icon: MAIN_PIN_ICON,
  },
);

const addAddress = (markerName) => {
  const pinCoords = markerName.getLatLng();
  ADDRESS.value = `${(pinCoords.lat).toFixed(ACCURACY)}, ${(pinCoords.lng).toFixed(ACCURACY)}`;
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

const resetMap = () => {
  pinMarkerRed.setLatLng({
    lat: START_COORDS.LAT,
    lng: START_COORDS.LNG,
  });

  MAP.setView({
    lat: START_COORDS.LAT,
    lng: START_COORDS.LNG,
  }, ZOOM_START);

  resetPopup();
  addAddressValue();
};

const markers = [];

const addPins = (points, getCart) => {
  points.forEach((point) => {
    const { lat, lng } = point.location;
    const markerPin = L.marker(
      {
        lat,
        lng,
      },
      {
        icon: ICON_PIN,
      });

    markerPin
      .addTo(MAP)
      .bindPopup(getCart(point),
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

pinMarkerRed.addTo(MAP);

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
