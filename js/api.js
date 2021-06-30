const getAds = (onSuccess, onError) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((similarAds) => {
      onSuccess(similarAds);
    })
    .catch(() => onError());
};

const sendData = (bodyForm, alertSuccess, alertError) => {
  fetch('https://23.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body: bodyForm,
  })
    .then((response) => {
      if (response.ok) {
        alertSuccess();
      } else {
        alertError();
      }
    })
    .catch(() => {
      alertError();
    });
};

export {
  getAds,
  sendData
};
