import React, { useState } from 'react';
import SignForm from './SignForm';

function Login({ handleLogin }) {
  const [formValue, setFormValue] = useState({
    password: '',
    email: '',
  });

  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleLogin(formValue);
    setFormValue({ password: '', email: '' });
  }

  return (
    <SignForm
      name="login"
      title="Вход"
      buttonText="Войти"
      onSubmit={handleSubmit}
    >
      <input
        className="sign-form__input"
        type="email"
        name="email"
        placeholder="Email"
        required
        value={formValue.email}
        onChange={handleChange}
      />
      <input
        className="sign-form__input"
        type="password"
        name="password"
        placeholder="Пароль"
        required
        value={formValue.password}
        onChange={handleChange}
      />
    </SignForm>
  );
}

export default Login;
