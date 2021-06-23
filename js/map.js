// eslint-disable-next-line no-redeclare
/* global L:readonly */
import {
  START_COoRDS,
  AD_FORM
} from './constants.js';

const ADDRESS = AD_FORM.querySelector('#address');

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

const pinMarker = L.marker(
  {
    lat: START_COORDS.LAT,
    lng: START_COORDS.LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
pinMarker.addTo(map);

ADDRESS.value = `${START_COORDS.LAT},  ${START_COORDS.LNG}`;

const addAddress = (markerName) => {
  const pinCoords = markerName.getLatLng();
  ADDRESS.value = `${(pinCoords.lat).toFixed(5)}, ${(pinCoords.lng).toFixed(5)}`;
};

pinMarker.on('moveend', (evt) => {
  addAddress(evt.target);
});

export {
  addMaps,
  addAddress
};
