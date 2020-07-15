import {ADD_PRODUCT, REMOVE_PRODUCT, RESET_BASKET} from '../constants/basket';

export const addToBasket = product => dispatch => {
  dispatch({type: ADD_PRODUCT, payload: product});
};

export const removeFromBasket = productId => dispatch => {
  dispatch({type: REMOVE_PRODUCT, payload: productId});
};

export const reset = () => dispatch => {
  dispatch({type: RESET_BASKET});
};
