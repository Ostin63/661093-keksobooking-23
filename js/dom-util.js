import {
  AD_FORM
} from './constants.js';

const SHOW__TIME = 5000;

const MAP_FILTERS = document.querySelector('.map__filters');
const ERROR__LOAD = document.querySelector('#error-loading').content;
const SUCCESS = document.querySelector('#success').content;
const ERROR = document.querySelector('#error').content;
const BODY = document.querySelector('body');

const FORMS = [
  {
    element: AD_FORM,
    disabledClass: 'ad-form--disabled',
    selector: 'fieldset.ad-form__element',
  },
  {
    element: MAP_FILTERS,
    disabledClass: 'map__filters--disabled',
    selector: 'select, fieldset',
  },
];

const removeExtra = (elements, elementClasses) => {
  elements.forEach((element) => {
    const elementClass = element.classList[1];
    if (!elementClasses.includes(elementClass)) {
      element.remove();
    }
  });
};

const fillPhotoOrDelete = (photos, block, element) => {
  if (!photos || photos.length === 0) {
    element.remove();
  } else {
    photos.forEach((photo) => {
      const clonePhoto = element.cloneNode(true);
      clonePhoto.src = photo;
      block.appendChild(clonePhoto);
    });
    element.remove();
  }
};

const toggleForm = (form, className, selector, enable) => {
  if (enable) {
    form.classList.remove(className);
  } else {
    form.classList.add(className);
  }

  const controls = form.querySelectorAll(selector);

  controls.forEach((control) => {
    if (enable) {
      control.removeAttribute('disabled');
    } else {
      control.setAttribute('disabled', true);
    }
  });
};

const toggleForms = (enable) => {
  FORMS.forEach(({ element, disabledClass, selector }) => {
    toggleForm(element, disabledClass, selector, enable);
  });
};

const deactiveForms = () => toggleForms(false);
const activeForms = () => toggleForms(true);


const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const onError = () => {
  const cloneError = ERROR__LOAD.cloneNode(true);
  setTimeout(BODY.append(cloneError), SHOW__TIME);
};

const clikeydown = (item) => {
  document.addEventListener('keydown', () => {
    if (isEscEvent) {
      item.remove();
    }
  });
  document.addEventListener('click', () => {
    item.remove();
  });
};

const alertSuccess = () => {
  const cloneSuccess = SUCCESS.cloneNode(true);
  BODY.append(cloneSuccess);
  const success = document.querySelector('.success');
  clikeydown(success);
};

const alertError = () => {
  const cloneError = ERROR.cloneNode(true);
  BODY.append(cloneError);
  const error = document.querySelector('.success');
  clikeydown(error);
};

export {
  removeExtra,
  fillPhotoOrDelete,
  deactiveForms,
  activeForms,
  onError,
  alertSuccess,
  alertError,
  isEscEvent
};
