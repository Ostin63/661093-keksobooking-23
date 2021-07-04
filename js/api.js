const getData = (onSuccess, onError, url) => {
  fetch(url)
    .then((response) => response.json())
    .then((similarAds) => {
      onSuccess(similarAds);
    })
    .catch(() => onError());
};

const sendData = (bodyForm, alertSuccess, alertError, url) => {
  fetch(url, {
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
  getData,
  sendData
};
