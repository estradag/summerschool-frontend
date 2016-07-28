import * as types from '../constants/ActionTypes';
import {Map, fromJS} from 'immutable';

const initialState = Map({cart:""});

export default function cart(state = initialState, action) {
  switch (action.type) {
    case types.SET_CART_ITEM:
    {
      return state.set(
        'cart', 
        action.value.get('cart_items').toSet().union(action.value.get('cart_item').map((value, index) =>
          value
        )).toList());
    }
    case types.DELETE_CART_ITEM:
    {
      return state.set('cart', action.value.get('cart_items').filter(value => 
        value.get('id') !== action.value.get('id')
      ));
    }
		case types.SET_CART:
    {
      return state.set('cart', action.value.get('cart').get('products').get('products'));
    }
    case types.CLEAN_CART:
    {
      return state.set('cart', '');
    }
    default:
      return state;
  }
}