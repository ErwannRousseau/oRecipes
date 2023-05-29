import {
  LOGOUT_USER, SET_CONNECTED_USER, SET_FAVORITES_RECIPES,
} from '../actions/user';

export const initialState = {
  logged: false,
  connectedUser: {
    name: '',
    token: '',
  },
  favorites: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CONNECTED_USER:
      return {
        ...state,
        logged: action.payload.logged,
        connectedUser:
          {
            name: action.payload.connectedUser.name,
            token: action.payload.connectedUser.token,
          },
      };
    case SET_FAVORITES_RECIPES:
      return {
        ...state,
        favorites:
          action.payload.favorites,
      };
    case LOGOUT_USER:
      return {
        ...state,
        logged: action.payload.logged,
        connectedUser: {
          name: action.payload.connectedUser.name,
          token: action.payload.connectedUser.token,
        },
        favorites: [],
      };
    default:
      return state;
  }
};

export default reducer;
