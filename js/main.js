const getRandomInteger = (min, max) => {
  if (max - min >= 0) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return Math.floor(Math.random() * (min - max) + min);
};

getRandomInteger(2, -10);

