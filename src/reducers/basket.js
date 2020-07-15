import {ADD_PRODUCT, REMOVE_PRODUCT, RESET_BASKET} from '../constants/basket';

const initialState = {
  basket: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_PRODUCT:
      const items = [...state.basket];
      const item = items.find(e => e.product.id === payload.id);
      if (item) {
        item.count++;
      } else {
        items.push({count: 1, product: payload});
      }
      return {
        ...state,
        basket: items,
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        basket: [...state.basket.filter(({product}) => product.id !== payload)],
      };
    case RESET_BASKET:
      return initialState;
    default:
      return state;
  }
};
