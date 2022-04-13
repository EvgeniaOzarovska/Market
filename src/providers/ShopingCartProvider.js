import React, { useEffect, useReducer } from 'react';

export const ShoppingCartContext = React.createContext();

const actionTypes = {
  ADD_ITEM: 'ADD_ITEM',
  INCREMENT_QUANTITY_ITEM: 'INCREMENT_QUANTITY_ITEM',
  DECREMENT_QUANTITY_ITEM: 'DECREMENT_QUANTITY_ITEM',
  DELETE_ITEM: 'DELETE_ITEM',
};

const addItem = (state, item) => {
  const { data } = state;
  const cartItemIndex = data.findIndex(cartItem => cartItem.id === item.id);
  if (cartItemIndex >= 0) {
    return {
      data: data.map(dataItem => {
        if (dataItem.id !== item.id) {
          return dataItem;
        } else {
          return { ...dataItem, count: dataItem.count + 1 };
        }
      }),
    };
  } else {
    return { data: [...data, item] };
  }
};

const incrementQuantityItem = (state, id) => {
  const { data } = state;
  return {
    data: data.map(item => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    }),
  };
};

const decrementQuantityItem = (state, id) => {
  const { data } = state;
  return {
    data: data.map(item => {
      if (item.id === id && item.count > 1) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    }),
  };
};

const deleteItem = (state, id) => {
  const { data } = state;
  const updatedCart = data.filter(cartItem => cartItem.id !== id);
  return { data: updatedCart };
};

const reducer = (state, action) => {
  const { ADD_ITEM, INCREMENT_QUANTITY_ITEM, DECREMENT_QUANTITY_ITEM, DELETE_ITEM } = actionTypes;

  switch (action.type) {
    case ADD_ITEM: {
      return addItem(state, action.item);
    }
    case INCREMENT_QUANTITY_ITEM: {
      return incrementQuantityItem(state, action.id);
    }
    case DECREMENT_QUANTITY_ITEM: {
      return decrementQuantityItem(state, action.id);
    }
    case DELETE_ITEM: {
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
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data } = state;
  const { ADD_ITEM, INCREMENT_QUANTITY_ITEM, DECREMENT_QUANTITY_ITEM, DELETE_ITEM } = actionTypes;

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(data));
  }, [data]);

  const value = {
    data,
    addItem: item => {
      dispatch({ type: ADD_ITEM, item });
    },
    incrementQuantityItem: id => {
      dispatch({ type: INCREMENT_QUANTITY_ITEM, id });
    },
    decrementQuantityItem: id => {
      dispatch({ type: DECREMENT_QUANTITY_ITEM, id });
    },
    deleteItem: id => {
      dispatch({ type: DELETE_ITEM, id });
    },
  };

  return <ShoppingCartContext.Provider value={value}>{children}</ShoppingCartContext.Provider>;
};
