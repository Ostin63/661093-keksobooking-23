import {
  AD_FORM,
  TITLE,
  PRICE,
  MIN_NAME_LENGTH,
  MAX_NAME_LENGTH,
  MAX_PRICE,
  TypePrices
} from './constants.js';

const ROOM_NUMBER = AD_FORM.querySelector('#room_number');
const GUESTS_NUMBER = AD_FORM.querySelector('#capacity');
const TYPE = AD_FORM.querySelector('#type');
const TIME_IN = AD_FORM.querySelector('#timein');
const TIME_OUT = AD_FORM.querySelector('#timeout');

TITLE.addEventListener('input', () => {
  const valueLength = TITLE.value.length;
  if (valueLength < MIN_NAME_LENGTH) {
    TITLE.setCustomValidity(`Еще ${MIN_NAME_LENGTH - valueLength} символов`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    TITLE.setCustomValidity(`Удалите лишние ${valueLength - MAX_NAME_LENGTH} символов`);
  } else {
    TITLE.setCustomValidity('');
  }
  TITLE.reportValidity();
});

PRICE.addEventListener('input', () => {
  const value = PRICE.value;
  if (value >= MAX_PRICE) {
    PRICE.setCustomValidity(`Цена не может превышать ${MAX_PRICE}`);
  } else {
    PRICE.setCustomValidity('');
  }
  PRICE.reportValidity();
});

const validiteRooms = () => {
  const guests = GUESTS_NUMBER.value;
  const rooms = ROOM_NUMBER.value;
  if (rooms === '100' && guests !== '0') {
    GUESTS_NUMBER.setCustomValidity('Значение только «не для гостей»');
  } else if (rooms === '3' && guests === '0') {
    GUESTS_NUMBER.setCustomValidity('Значение только «для 3 гостей», «для 2 гостей» или «для 1 гостя»');
  } else if (rooms === '1' && guests !== '1') {
    GUESTS_NUMBER.setCustomValidity('Значение только «для 1 гостя»');
  } else if (rooms === '2' && guests === '0' || rooms === '2' && guests === '3') {
    GUESTS_NUMBER.setCustomValidity('Значение только «для 2 гостей» или «для 1 гостя»');
  } else {
    GUESTS_NUMBER.setCustomValidity('');
  }
  GUESTS_NUMBER.reportValidity();
};

ROOM_NUMBER.addEventListener('change', validiteRooms);
GUESTS_NUMBER.addEventListener('change', validiteRooms);

TYPE.addEventListener('change', () => {
  PRICE.min = TypePrices[TYPE.value];
  PRICE.placeholder = TypePrices[TYPE.value];
});

TIME_IN.addEventListener('change', () => {
  TIME_OUT.value = TIME_IN.value;
});

TIME_OUT.addEventListener('change', () => {
  TIME_IN.value = TIME_OUT.value;
});
