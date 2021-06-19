const AD_FORM = document.querySelector('.ad-form');
const FILDSETS_FORM = AD_FORM.querySelectorAll('fieldset');

const deactivationForm = function () {
  AD_FORM.classList.add('ad-form--disabled');
  FILDSETS_FORM.forEach((fieldset) => {
    fieldset.disabled = true;
  });
};

const activationForm = function () {
  AD_FORM.classList.remove('ad-form--disabled');
  FILDSETS_FORM.forEach((fieldset) => {
    fieldset.disabled = false;
  });
};

export {
  deactivationForm,
  activationForm
};
