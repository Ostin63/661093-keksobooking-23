import {
  STRING_INDEX,
  RERENDER_DELAY
} from './constants.js';

const keys = {
  escape: 'Escape',
  esc: 'Escape',
};

const padLeft = (index) => String(index).padStart(STRING_INDEX, '0');

const createAuthorUrl = (index) => `img/avatars/user${padLeft(index)}.png`;

const createPluralNames = (value, words) => {
  value = Math.abs(value) % 100;
  const num = value % 10;
  if (value > 10 && value < 20) { return words[2]; }
  if (num > 1 && num < 5) { return words[1]; }
  if (num === 1) { return words[0]; }
  return words[2];
};

const getTemplateContent = (block, item) =>
  block.querySelector(`#${item}`)
    .content
    .querySelector(`.${item}`);

const isEscEvent = (evt) => evt.key === keys.escape || evt.key === keys.esc;

const isFunction = (arg) => typeof arg === 'function';
function debounce(callback, timeoutDelay = RERENDER_DELAY) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {
  createAuthorUrl,
  createPluralNames,
  isEscEvent,
  isFunction,
  getTemplateContent,
  debounce
};
