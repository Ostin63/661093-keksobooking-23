const loadData = (onSuccess, onError, url) => {
  fetch(url)
    .then((response) => response.json())
    .then((similarAds) => {
      onSuccess(similarAds);
    })
    .catch(() => onError());
};

const sendData = (bodyForm, alertSuccess, resetForm, alertError, url) => {
  fetch(url, {
    method: 'POST',
    body: bodyForm,
  })
    .then((response) => {
      if (response.ok) {
        alertSuccess();
        resetForm();
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
