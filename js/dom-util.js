const MAP_CANVAS = document.querySelector('#map-canvas');
const SIMILAR_CARD_TEMPLATE = document.querySelector('#card')
  .content
  .querySelector('.popup');

const AD_FORM = document.querySelector('.ad-form');
const MAP_FILTERS = document.querySelector('.map__filters');

const FORMS = [{
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
  if (photos.length === 0) {
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
  FORMS.forEach(({ element, disabledClass, selector}) => {
    toggleForm(element, disabledClass, selector, enable);
  });
};

const deactivationForms = () => toggleForms(false);
const activationForms = () => toggleForms(true);

export {
  MAP_CANVAS,
  SIMILAR_CARD_TEMPLATE,
  removeExtra,
  fillPhotoOrDelete,
  deactivationForms,
  activationForms
};
