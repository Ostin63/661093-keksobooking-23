import {
  AD_FORM,
  FILTER_MAP,
  MAP_FEATURES
} from './constants.js';

import {
  isEscEvent
} from './util.js';

const SHOW__TIME = 5000;

const getTemplateContent = (block, item) =>
  block.querySelector(`#${item}`)
    .content
    .querySelector(`.${item}`);

const BODY = document.querySelector('body');
const MAP_FILTERS = BODY.querySelector('.map__filters');
const SUCCESS = getTemplateContent(BODY, 'success');
const ERROR__LOAD = getTemplateContent(BODY, 'error-loading');
const ERROR = getTemplateContent(BODY, 'error');
const ERROR_BUTTON = BODY.querySelector('.error__button');

const successElement = SUCCESS.cloneNode(true);
const errorElement = ERROR.cloneNode(true);

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

const deactivateFilters = () => {
  FILTER_MAP.classList.add('ad-form--disabled');
  MAP_FEATURES.disabled = true;
  MAP_FILTERS.forEach((filter) => {
    filter.disabled = true;
  });
};

const onError = () => {
  const cloneError = ERROR__LOAD.cloneNode(true);
  BODY.append(cloneError);
  deactivateFilters();
  setTimeout(() => {
    cloneError.remove();
  }, SHOW__TIME);
};

const onSuccessRemove = () => {
  successElement.remove();
  document.removeEventListener('click', onSuccessRemove);
};

const onElementEscRemove = () => {
  if (isEscEvent) {
    onSuccessRemove();
    document.removeEventListener('keydown', onElementEscRemove);
  }
};

const alertSuccess = () => {
  BODY.append(successElement);
  document.addEventListener('keydown', onElementEscRemove);
  document.addEventListener('click', onSuccessRemove);
};

const onErrorRemove = () => {
  errorElement.remove();
  document.removeEventListener('click', onErrorRemove);
  ERROR_BUTTON.removeEventListener('click', onErrorRemove);

};

const onErrorEscRemove = () => {
  if (isEscEvent) {
    onErrorRemove();
    document.removeEventListener('keydown', onErrorEscRemove);
  }
};

const alertError = () => {
  BODY.append(errorElement);
  document.addEventListener('keydown', onErrorEscRemove);
  document.addEventListener('click', onErrorRemove);
  ERROR_BUTTON.addEventListener('click', onErrorRemove);
};

export {
  removeExtra,
  fillPhotoOrDelete,
  deactiveForms,
  activeForms,
  onError,
  alertSuccess,
  alertError
};
