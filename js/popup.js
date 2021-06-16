import {
  getAds
} from './data.js';


const footer = document.querySelector('#map-canvas');
const similarCardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const getData = getAds();

const cardElement = similarCardTemplate.cloneNode(true);

getData.forEach((items) => {
  const itemType  = {
    palace: 'Дворец',
    flat: 'Квартира',
    house: 'Дом',
    bungalow: 'Бунгало',
    hotel: 'Отель',
  };
  cardElement.querySelector('.popup__type').textContent = itemType[items.offer.type];
  cardElement.querySelector('.popup__avatar').src = items.author.avatar;
  cardElement.querySelector('.popup__title').textContent = items.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = items.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${items.offer.price} ₽/ночь`;

  cardElement.querySelector('.popup__text--capacity').textContent = `${items.offer.rooms} комнаты для ${items.offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${items.offer.checkin} выезд до ${items.offer.checkout}`;

  const modifiers = items.offer.features.map((features) => `popup__feature--${features}`);
  const popupFeature = cardElement.querySelectorAll('.popup__feature');

  popupFeature.forEach((item) => {
    const modifier = item.classList[1];

    if (!modifiers.includes(modifier)) {
      item.remove();
    }
  });

  cardElement.querySelector('.popup__description').textContent = items.offer.description;
  cardElement.querySelector('.popup__photo').src = items.offer.photos;


  footer.appendChild(cardElement);
});

export {
  getData
};
