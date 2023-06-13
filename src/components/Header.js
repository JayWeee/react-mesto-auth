import React from 'react';
import { Link, Route, Routes} from 'react-router-dom';
import logo from '../images/logo.svg';

function Header({ userData }) {

  function signOut() {
    localStorage.removeItem('token');
  }

  return (
    <header className="header">
      <img src={logo} alt="Логотип" className="logo" />
      <Routes>
        <Route path='/' element={
          <div className='header__user-info-container'>
            <p className='header__user-email'>{userData.email}</p>
            <Link className='header__link header_link-color' to='/sign-in' onClick={signOut}>Выйи</Link>
          </div>
        } /> 
        <Route path='/sign-in' element={<Link className='header__link' to='/sign-up'>Регистрация</Link>} />
        <Route path='/sign-up' element={<Link className='header__link' to='/sign-in'>Войти</Link>} />
      </Routes>
    </header>
  );
}

export default Header;
