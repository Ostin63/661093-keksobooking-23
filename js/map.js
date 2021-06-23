// eslint-disable-next-line no-redeclare
/* global L:readonly */
import {
  START_COORDS,
  AD_FORM
} from './constants.js';

// import {
//   getAds
// } from './data.js';

const ADDRESS = AD_FORM.querySelector('#address');
const BUTTON_RESET = AD_FORM.querySelector('.ad-form__reset');

const map = L.map('map-canvas');
const addMaps = () => {
  map.setView({
    lat: START_COORDS.LAT,
    lng: START_COORDS.LNG,
  }, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
};

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
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
pinMarkerRed.addTo(map);

ADDRESS.value = `${START_COORDS.LAT},  ${START_COORDS.LNG}`;

const addAddress = (markerName) => {
  const pinCoords = markerName.getLatLng();
  ADDRESS.value = `${(pinCoords.lat).toFixed(5)}, ${(pinCoords.lng).toFixed(5)}`;
};

pinMarkerRed.on('moveend', (evt) => {
  addAddress(evt.target);
});

BUTTON_RESET.addEventListener('click', () => {
  ADDRESS.value = `${START_COORDS.LAT},  ${START_COORDS.LNG}`;
  pinMarkerRed.setLatLng({
    lat: START_COORDS.LAT,
    lng: START_COORDS.LNG,
  });

  map.setView({
    lat: START_COORDS.LAT,
    lng: START_COORDS.LNG,
  }, 9);
});

const points = [
  {
    title: 'Футура',
    lat: 59.96925,
    lng: 30.31730,
  },
  {
    title: 'Шаверма',
    lat: 59.96783,
    lng: 30.31258,
  },
  {
    title: 'Франк',
    lat: 59.95958,
    lng: 30.30228,
  },
  {
    title: 'Ginza',
    lat: 59.97292,
    lng: 30.31982,
  },
];

const iconPIn = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

// const addPinArr = () => {
points.forEach(({ lat, lng }) => {

  const markerPin = L.marker(
    {
      lat,
      lng,
    },
    {
      iconPIn,
    });

  markerPin.addTo(map);
});
// };


export {

  pinMarkerRed,
  addMaps,
  addAddress
  // addPinArr
};
