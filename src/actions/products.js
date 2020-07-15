import {ADD_PRODUCTS, RESET_PRODUCTS, SET_LOADING} from '../constants/products';
import {GET} from '../utils/api';

export const addProducts = page => dispatch => {
  dispatch({type: SET_LOADING, payload: true});
  GET(page, 10).then(data => {
    dispatch({type: ADD_PRODUCTS, payload: data});
    dispatch({type: SET_LOADING, payload: false});
  });
};

export const reset = () => dispatch => {
  dispatch({type: RESET_PRODUCTS});
};
