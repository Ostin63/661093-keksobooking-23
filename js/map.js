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

const map = L.map('map-canvas');
const addMaps = (activeMap) => {
  map.on('load', activeMap);
  map.setView({
    lat: START_COORDS.LAT,
    lng: START_COORDS.LNG,
  }, 12);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
};

const mainPinIcon = L.icon({
  iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
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
const addAddress = (markerName) => {
  const pinCoords = markerName.getLatLng();
  ADDRESS.value = `${(pinCoords.lat).toFixed(5)}, ${(pinCoords.lng).toFixed(5)}`;
};

pinMarkerRed.on('moveend', (evt) => {
  addAddress(evt.target);
});

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

  map.setView({
    lat: START_COORDS.LAT,
    lng: START_COORDS.LNG,
  }, 12);

  resetPopup();
  addAddressValue();
};

const markers = [];

const addPins = (points, cart) => {
  points.forEach((point) => {
    const { lat, lng } = point.location;
    const iconPin = L.icon({
      iconUrl: '../img/pin.svg',
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
      .addTo(map)
      .bindPopup(cart(point),
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

export {
  pinMarkerRed,
  addMaps,
  addAddress,
  addPins,
  resetMap,
  removePins
};
