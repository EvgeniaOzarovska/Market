import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

export const ShoppingCartContext = React.createContext();

const actionTypes = {
  ADD_ITEM: 'ADD_ITEM',
  INCREMENT_QUANTITY_ITEM: 'INCREMENT_QUANTITY_ITEM',
  DECREMENT_QUANTITY_ITEM: 'DECREMENT_QUANTITY_ITEM',
  DELETE_ITEM: 'DELETE_ITEM',
};

export const setAddItem = payload => ({
  type: actionTypes.ADD_ITEM,
  payload,
});

export const setIncrementQuantityItem = payload => ({
  type: actionTypes.INCREMENT_QUANTITY_ITEM,
  payload,
});

export const setDecrementQuantityItem = payload => ({
  type: actionTypes.DECREMENT_QUANTITY_ITEM,
  payload,
});

export const setDeleteItem = payload => ({
  type: actionTypes.DELETE_ITEM,
  payload,
});

const reducer = (state, action) => {
  const { ADD_ITEM, INCREMENT_QUANTITY_ITEM, DECREMENT_QUANTITY_ITEM, DELETE_ITEM } = actionTypes;
  const { data } = state;
  const { payload } = action;

  switch (action.type) {
    case ADD_ITEM: {
      const cartItemIndex = data.findIndex(cartItem => cartItem.id === payload.id);
      if (cartItemIndex >= 0) {
        return {
          data: data.map(dataItem => {
            if (dataItem.id !== payload.id) {
              return dataItem;
            } else {
              return { ...dataItem, count: dataItem.count + 1 };
            }
          }),
        };
      } else {
        return { data: [...data, payload] };
      }
    }
    case INCREMENT_QUANTITY_ITEM: {
      return {
        data: data.map(item => {
          if (item.id === payload.id) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        }),
      };
    }
    case DECREMENT_QUANTITY_ITEM: {
      return {
        data: data.map(item => {
          if (item.id === payload.id && item.count > 1) {
            return { ...item, count: item.count - 1 };
          }
          return item;
        }),
      };
    }
    case DELETE_ITEM: {
      const updatedCart = data.filter(cartItem => cartItem.id !== payload.id);
      return { data: updatedCart };
    }
    default:
      return state;
  }
};

const init = () => {
  const initialData = JSON.parse(localStorage.getItem('cart'));
  if (initialData === null) {
    return { data: [] };
  } else {
    return { data: initialData };
  }
};

export const ShoppingCartProvider = ({ children }) => {
  const initialState = init();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.data));
  }, [state.data]);

  return (
    <ShoppingCartContext.Provider value={{ state, dispatch }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

ShoppingCartProvider.propType = {
  children: PropTypes.array,
};

