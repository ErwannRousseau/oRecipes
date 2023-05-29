export const SET_CONNECTED_USER = 'SET_CONNECTED_USER';
export const setConnectedUser = (connectedUserName, connectedUserToken) => ({
  type: SET_CONNECTED_USER,
  payload: {
    logged: true,
    connectedUser: {
      name: connectedUserName,
      token: connectedUserToken,
    }
    ,
  },
});

export const SET_FAVORITES_RECIPES = 'SET_FAVORITES_RECIPES';
export const setFavoritesRecipes = (favoritesRecipes) => ({
  type: SET_FAVORITES_RECIPES,
  payload: {
    favorites:
      favoritesRecipes,
  },
});

export const LOGOUT_USER = 'LOGOUT_USER';
export const logoutUser = () => ({
  type: LOGOUT_USER,
  payload: {
    logged: false,
    connectedUser: {
      name: '',
      token: '',
    },
  },
});
