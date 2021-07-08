import {
  AD_FORM,
  PREVIEW
} from './constants.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const FILD_AVATAR = AD_FORM.querySelector('.ad-form-header__input');
const FILD_HOUSING = AD_FORM.querySelector('.ad-form__input');
const IMAGES_PREVIEW = AD_FORM.querySelector('.ad-form__photo');

const downloadFotoUser = () => {
  const file = FILD_AVATAR.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      PREVIEW.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
};

const downloadFotoHousing = () => {
  const file = FILD_HOUSING.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      IMAGES_PREVIEW.style.backgroundImage = `url(${reader.result})`;
      IMAGES_PREVIEW.style.backgroundSize = '70px 70px';
    });

    reader.readAsDataURL(file);
  }
};

const resetImage = () => {
  IMAGES_PREVIEW.style = '';
};

const addEventListenerFotos = () => {
  FILD_AVATAR.addEventListener('change', downloadFotoUser);
  FILD_HOUSING.addEventListener('change', downloadFotoHousing);
};

export {
  addEventListenerFotos,
  resetImage
};
