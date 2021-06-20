const ROOM_NUMBER = document.querySelector('#room_number');
const GUESTS_NUMBER = document.querySelector('#capacity');


const validateform = (item) => {
  item.addEventListener('invalid', () => {
    if (item.validity.valueMissing) {
      item.setCustomValidity('Обязательное поле');
    } else {
      item.setCustomValidity('');
    }
  });
};

const validateTitleElement = (item, minLength, maxLength) => {
  item.addEventListener('input', () => {
    const valueLength = item.value.length;
    if (valueLength < minLength) {
      item.setCustomValidity(`Ещё ${minLength - valueLength} символов`);
    } else if (valueLength > maxLength) {
      item.setCustomValidity(`Удалите лишние ${valueLength - maxLength} символов`);
    } else {
      item.setCustomValidity('');
    }
    item.reportValidity();
  });
};

const validateNumberElement = (item, max) => {
  item.addEventListener('input', () => {
    const value = item.value;
    if (value >= max) {
      item.setCustomValidity(`Цена не может превышать ${max}`);
    } else {
      item.setCustomValidity('');
    }
    item.reportValidity();
  });
};

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

export {
  validateform,
  validateTitleElement,
  validateNumberElement
};
