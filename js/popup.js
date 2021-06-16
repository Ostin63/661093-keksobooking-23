import {
  getAds
} from './data.js';

const footer = document.querySelector('.footer');
const similarCardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const getData = getAds();

getData.forEach((items) => {
  const cardElement = similarCardTemplate.cloneNode(true);

  cardElement.querySelector('.popup__avatar').src = items.author.avatar;
  cardElement.querySelector('.popup__title').textContent = items.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = items.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${items.offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = items.offer.type;
  cardElement.querySelector('.popup__text--capacity').textContent = `${items.offer.rooms} комнаты для ${items.offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${items.offer.checkin} выезд до ${items.offer.checkout}`;
  cardElement.querySelector('.popup__description').textContent = items.offer.description;

  const modifiers = items.offer.features.map((features) => `popup__features--${features}`);
  const popupFeatures = cardElement.querySelectorAll('.popup__features');
  popupFeatures.forEach((item) => {
    const popupFeature = item.querySelectorAll('.popup__feature');

    popupFeature.forEach((list) => {
      const modifier = list;

      if (!modifiers.includes(modifier)) {

        item.remove();
      }
    });
  });

  footer.appendChild(cardElement);
});

export {
  getData
};
