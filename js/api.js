const getAds = (onSuccess, onError) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((similarAds) => {
      onSuccess(similarAds);
    })
    .catch(() => onError());
};

export {
  getAds
};
