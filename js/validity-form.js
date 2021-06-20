const ROOM_NUMBER = document.querySelector('#room_number');
const GUESTS_NUMBER = document.querySelector('#capacity');


const validatyform = (item) => {
  item.addEventListener('invalid', () => {
    if (item.validity.valueMissing) {
      item.setCustomValidity('Обязательное поле');
    } else {
      item.setCustomValidity('');
    }
  });
};

const validatyTitleElement = (item, minLength, maxLength) => {
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

const validatyNumberElement = (item, max) => {
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

const validityRooms = () => {
  const guests = GUESTS_NUMBER.selectedIndex;
  const rooms = ROOM_NUMBER.selectedIndex;
  if (rooms === 0 && guests !== 1) {
    ROOM_NUMBER.setCustomValidity('для 1 гостя');
  } else if (rooms === 1 && guests === 0 || rooms === 2 && guests === 3) {
    ROOM_NUMBER.setCustomValidity('для 2 гостей или для 1 гостя');
  } else if (rooms === 2 && guests === 0) {
    ROOM_NUMBER.setCustomValidity('для 3 гостей, для 2 гостей или для 1 гостя');
  } else if (rooms === 3 && guests !== 0) {
    ROOM_NUMBER.setCustomValidity('не для гостей');
  } else {
    ROOM_NUMBER.setCustomValidity('');
  }
  ROOM_NUMBER.reportValidity();
};

ROOM_NUMBER.addEventListener('change', validityRooms);
ROOM_NUMBER.addEventListener('change', validityRooms);

export {
  validatyform,
  validatyTitleElement,
  validatyNumberElement
};
