import {
  AD_FORM,
  PREVIEW,
  IMAGES_PREVIEW
} from './constants.js';


const FILD_AVATAR = AD_FORM.querySelector('.ad-form-header__input');
const FILD_HOUSING = AD_FORM.querySelector('.ad-form__input');

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
  matchesFile(FILD_AVATAR, PREVIEW, processingAvatar);
};

const downloadFotoHousing = () => {
  matchesFile(FILD_HOUSING, IMAGES_PREVIEW, processingFotoHousing);
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
