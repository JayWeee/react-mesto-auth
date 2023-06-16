import { useEffect } from 'react';
import { useForms } from '../hooks/useForms';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {

  const { values, handleChange, setValues } = useForms({});

  // Очистка инпутов при открытии
  useEffect(() => {
    setValues({
      title: '',
      link: '',
    }); // eslint-disable-next-line
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();

    onAddPlace(values);
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
      <input
        className="popup__input"
        name="title"
        id="title-input"
        type="text"
        value={values.title}
        onChange={handleChange}
        required
        placeholder="Название"
      />

      <span className="popup__input-error title-input-error" />

      <input
        className="popup__input"
        name="link"
        id="link-input"
        type="url"
        value={values.link}
        onChange={handleChange}
        required
        placeholder="Ссылка на картинку"
      />

      <span className="popup__input-error link-input-error" />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
