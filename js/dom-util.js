
const removeExtra = (elements, isElement) => {
  elements.forEach((item) => {
    const modifier = item.classList[1];

    if (!isElement.includes(modifier)) {
      item.remove();
    }
  });
};

const fillPhotoOrDelete = (data, block, element) => {
  if (data.length === 0) {
    element.remove();
  } else {
    data.forEach((item) => {
      const clonePhoto = element.cloneNode(true);
      clonePhoto.src = item;
      block.appendChild(clonePhoto);
    });
    element.remove();
  }
};

export {
  removeExtra,
  fillPhotoOrDelete
};
