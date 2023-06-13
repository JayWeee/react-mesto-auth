import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputRef = useRef();
  // Очистка инпута при открытии
  useEffect(() => {
    inputRef.current.value = '';
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      link: inputRef.current.value,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="edit-avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
    >
      <>
        <input
          className="popup__input"
          name="link"
          id="link-avatar-input"
          type="url"
          ref={inputRef}
          required
          placeholder="Ссылка на картинку"
        />

        <span className="popup__input-error link-avatar-input-error" />
      </>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
