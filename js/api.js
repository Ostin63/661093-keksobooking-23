const loadData = ( url, onSuccess, onError) => {
  fetch(url)
    .then((response) => response.json())
    .then((similarAds) => {
      onSuccess(similarAds);
    })
    .catch(() => onError());
};

const sendData = ( url, bodyForm, alertSuccess, alertError) => {
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
  loadData,
  sendData
};
