const getRandomInteger = (min, max) => {
  if (max - min >= 0) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return Math.floor(Math.random() * (min - max) + min);
};

getRandomInteger(2, -10);

const getRandomIntlimitDecimalPlaces = (min, max, limitSigns) => {
  if (max - min >= 0) {
    return (Math.floor(Math.random() * (max - min) + min)).toFixed(limitSigns);
  }

  return (Math.floor(Math.random() * (min - max) + min)).toFixed(limitSigns);
};

getRandomIntlimitDecimalPlaces(10, 25, 4);
