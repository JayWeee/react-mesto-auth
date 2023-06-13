import { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  // Очистка инпутов при открытии
  useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeLink(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onAddPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="card"
      title="Новое место"
      buttonText="Создать"
    >
      <>
        <input
          className="popup__input"
          name="title"
          id="title-input"
          type="text"
          value={name}
          onChange={handleChangeName}
          required
          placeholder="Название"
        />

        <span className="popup__input-error title-input-error" />

        <input
          className="popup__input"
          name="link"
          id="link-input"
          type="url"
          value={link}
          onChange={handleChangeLink}
          required
          placeholder="Ссылка на картинку"
        />

        <span className="popup__input-error link-input-error" />
      </>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
