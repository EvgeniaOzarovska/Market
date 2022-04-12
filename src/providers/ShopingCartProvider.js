import React, { useEffect } from 'react';

export const ShoppingCartContext = React.createContext();

const actions = {
  ADD_ITEM: 'ADD_ITEM',
  INCREMENT_QUANTITY_ITEM: 'INCREMENT_QUANTITY_ITEM',
  DECREMENT_QUANTITY_ITEM: 'DECREMENT_QUANTITY_ITEM',
  DELETE_ITEM: 'DELETE_ITEM',
};

const addItem = (state, item) => {
  const cartItemIndex = state.data.findIndex(cartItem => cartItem.id === item.id);
  if (cartItemIndex >= 0) {
    const data = state.data;
    data[cartItemIndex].count += 1;
    return { data: data };
  } else {
    const array = state.data;
    array.push(item);
    return { data: array };
  }
};

const incrementQuantityItem = (state, id) => {
  return {
    data: state.data.map(item => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    }),
  };
};

const decrementQuantityItem = (state, id) => {
  return {
    data: state.data.map(item => {
      if (item.id === id && item.count > 1) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    }),
  };
};

const deleteItem = (state, id) => {
  const updatedCart = state.data.filter(cartItem => cartItem.id !== id);
  return { data: updatedCart };
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_ITEM: {
      return addItem(state, action.item);
    }
    case actions.INCREMENT_QUANTITY_ITEM: {
      return incrementQuantityItem(state, action.id);
    }
    case actions.DECREMENT_QUANTITY_ITEM: {
      return decrementQuantityItem(state, action.id);
    }
    case actions.DELETE_ITEM: {
      return deleteItem(state, action.id);
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
  const [state, dispatch] = React.useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.data));
  }, [state.data]);

  const value = {
    data: state.data,
    addItem: item => {
      dispatch({ type: actions.ADD_ITEM, item });
    },
    incrementQuantityItem: id => {
      dispatch({ type: actions.INCREMENT_QUANTITY_ITEM, id });
    },
    decrementQuantityItem: id => {
      dispatch({ type: actions.DECREMENT_QUANTITY_ITEM, id });
    },
    deleteItem: id => {
      dispatch({ type: actions.DELETE_ITEM, id });
    },
  };

  return <ShoppingCartContext.Provider value={value}>{children}</ShoppingCartContext.Provider>;
};
