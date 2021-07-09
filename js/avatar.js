import {
  AD_FORM,
  PREVIEW,
  IMAGES_PREVIEW
} from './constants.js';


const USER_FOTO_PREVIEW = AD_FORM.querySelector('.ad-form-header__input');
const HOUSING_FOTO_PREVIEW = AD_FORM.querySelector('.ad-form__input');

const processingAvatar = (reader, preview) => {
  reader.addEventListener('load', () => {
    preview.src = reader.result;
  });
};

const processingFotoHousing = (reader, preview) => {
  reader.addEventListener('load', () => {
    preview.style.backgroundImage = `url(${reader.result})`;
    preview.style.backgroundSize = '70px 70px';
  });
};

const matchesFile = (element, preview, processing) => {
  const FILE_TYPES = ['jpg', 'jpeg', 'png'];
  const file = element.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();
    processing(reader, preview);

    reader.readAsDataURL(file);
  }
};

const downloadFotoUser = () => {
  matchesFile(USER_FOTO_PREVIEW, PREVIEW, processingAvatar);
};

const downloadFotoHousing = () => {
  matchesFile(HOUSING_FOTO_PREVIEW, IMAGES_PREVIEW, processingFotoHousing);
};

const resetImage = () => {
  IMAGES_PREVIEW.style = '';
};

const addEventListenerFotos = () => {
  USER_FOTO_PREVIEW.addEventListener('change', downloadFotoUser);
  HOUSING_FOTO_PREVIEW.addEventListener('change', downloadFotoHousing);
};

export {
  addEventListenerFotos,
  resetImage
};
