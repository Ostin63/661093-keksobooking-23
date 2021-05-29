const getRange = (min, max) => {
  if (max >= min) {
    return Math.random() * (max - min) + min;
  }
  return Math.random() * (min - max) + min;
};
const getRandomInteger = (min, max) => Math.floor(getRange(min, max));

getRandomInteger(2, 10);


const getRandomIntlimitDecimalPlaces = (min, max, limitSigns) => getRange(min, max).toFixed(limitSigns);

getRandomIntlimitDecimalPlaces(15, 2.5, 5);
