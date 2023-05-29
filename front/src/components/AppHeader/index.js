import logo from 'src/assets/logo.png';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import { logoutUser, setConnectedUser, setFavoritesRecipes } from '../../actions/user';

import LoginForm from './LoginForm';

function AppHeader() {
  const dispatch = useDispatch();
  const { logged, connectedUser } = useSelector((state) => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeField = (value, name) => {
    if (name === 'email') {
      setEmail(value);
    }
    else if (name === 'password') {
      setPassword(value);
    }
  };

  function fetchFavoriteRecipes(JWT) {
    axios.get(
      // url
      'http://localhost:3001/favorites',
      // options, notamment les headers
      // => on transmet le token JWT au serveur, pour qu'il nous reconnaise et nous
      // renvoie nos recettes préférées
      {
        headers: {
          // nom du header: valeur
          Authorization: `Bearer ${JWT}`,
        },
      },
    )
      .then((response) => {
        dispatch(setFavoritesRecipes(response.data.favorites));
      })
      .catch((error) => {
        console.log(error);
        alert('Erreur d\'authentification');
      });
  }

  const handleLogin = () => {
    axios.post('http://localhost:3001/login', {
      email: email,
      password: password,
    })
      .then((response) => {
        if (response.data.logged) {
          dispatch(setConnectedUser(response.data.pseudo, response.data.token));
          // console.log('Connexion réussie avec le pseudo:', response.data.pseudo);
          // console.log('Token:', response.data.token);
          fetchFavoriteRecipes(response.data.token);
        }
      })
      .catch((error) => {
        console.log(error);
        alert('Erreur d\'authentification');
      });
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    setEmail('');
    setPassword('');
  };

  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
      <LoginForm
        isLogged={logged}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        changeField={changeField}
        email={email}
        password={password}
        loggedMessage={`Bienvenue ${connectedUser.name}`}

      />
    </header>
  );
}

export default AppHeader;
