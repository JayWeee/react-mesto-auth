export function renderLoading(isLoading, submitButton) {
  if (isLoading) {
    submitButton.textContent = 'Сохранение...';
  } else {
    submitButton.textContent = 'Сохранить';
  }
}

export const configApi = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-64/',
  headers: {
    authorization: '31554c8a-77dd-4979-b2d2-ecadd12ea5c9',
    'Content-Type': 'application/json',
  },
};
