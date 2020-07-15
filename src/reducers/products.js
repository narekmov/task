import {ADD_PRODUCTS, RESET_PRODUCTS, SET_LOADING} from '../constants/products';

const initialState = {
  products: [],
  isLoading: false,
  isLastPage: false,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_PRODUCTS:
      return {
        ...state,
        products: [...state.products, ...payload],
        isLastPage: payload.length !== 10,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case RESET_PRODUCTS:
      return initialState;
    default:
      return state;
  }
};
