import {
  AD_FORM,
  MIN_NAME_LENGTH,
  MAX_NAME_LENGTH,
  MAX_PRICE,
  TITLE,
  PRICE
} from './constants.js';

const ROOM_NUMBER = AD_FORM.querySelector('#room_number');
const GUESTS_NUMBER = AD_FORM.querySelector('#capacity');

const validateform = (item) => {
  item.addEventListener('invalid', () => {
    if (item.validity.valueMissing) {
      item.setCustomValidity('Обязательное поле');
    } else {
      item.setCustomValidity('');
    }
  });
};

TITLE.addEventListener('input', () => {
  const valueLength = TITLE.value.length;
  if (valueLength < MIN_NAME_LENGTH) {
    TITLE.setCustomValidity(`Ещё ${MIN_NAME_LENGTH - valueLength} символов`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    TITLE.setCustomValidity(`Удалите лишние ${valueLength - MAX_NAME_LENGTH} символов`);
  } else {
    TITLE.setCustomValidity('');
  }
  TITLE.reportValidity();
});

const validitePrice = () => {
  const value = PRICE.value;
  if (value >= MAX_PRICE) {
    PRICE.setCustomValidity(`Цена не может превышать ${MAX_PRICE}`);
  } else {
    PRICE.setCustomValidity('');
  }
  PRICE.reportValidity();
};

PRICE.addEventListener('input', validitePrice);

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

validateform(TITLE);
validateform(PRICE);
