import React, { useCallback, useEffect, useReducer } from 'react';
import { Props } from './AppThemeProvider';

export interface IShoppingCartItemType {
  id: number;
  name: string;
  count: number;
  image: string;
  price: number;
}

interface IShoppingCartAction {
  type: string;
  payload: IShoppingCartItemType;
}

export interface IShoppingCartContextType {
  data: IShoppingCartItemType[];
  addItem: (payload: IShoppingCartItemType) => void;
  incrementQuantityItem: (payload: IShoppingCartItemType) => void;
  decrementQuantityItem: (payload: IShoppingCartItemType) => void;
  deleteItem: (payload: IShoppingCartItemType) => void;
}

const actionTypes = {
  ADD_ITEM: 'ADD_ITEM',
  INCREMENT_QUANTITY_ITEM: 'INCREMENT_QUANTITY_ITEM',
  DECREMENT_QUANTITY_ITEM: 'DECREMENT_QUANTITY_ITEM',
  DELETE_ITEM: 'DELETE_ITEM',
};

interface IShoppingCartState {
  data: IShoppingCartItemType[];
}

export const ShoppingCartContext = React.createContext<IShoppingCartContextType>({
  data: [],
  addItem: () => {},
  incrementQuantityItem: () => {},
  decrementQuantityItem: () => {},
  deleteItem: () => {},
});

const shoppingCartReducer = (state: IShoppingCartState, action: IShoppingCartAction) => {
  const { ADD_ITEM, INCREMENT_QUANTITY_ITEM, DECREMENT_QUANTITY_ITEM, DELETE_ITEM } = actionTypes;
  const { data } = state;
  const { payload } = action;

  switch (action.type) {
    case ADD_ITEM: {
      const cartItemIndex = data.findIndex((cartItem: IShoppingCartItemType) => cartItem.id === payload.id);
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
        data: data.map((item: IShoppingCartItemType) => {
          if (item.id === payload.id) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        }),
      };
    }
    case DECREMENT_QUANTITY_ITEM: {
      return {
        data: data.map((item: IShoppingCartItemType) => {
          if (item.id === payload.id && item.count > 1) {
            return { ...item, count: item.count - 1 };
          }
          return item;
        }),
      };
    }
    case DELETE_ITEM: {
      const updatedCart = data.filter((cartItem: IShoppingCartItemType) => cartItem.id !== payload.id);
      return { data: updatedCart };
    }
    default:
      return state;
  }
};

const init = () => {
  const cartString = localStorage.getItem('cart');
  if (cartString === null) {
    return { data: [] };
  } else {
    return { data: JSON.parse(cartString) };
  }
};

export const ShoppingCartProvider = ({ children }: Props) => {
  const initialState = init();
  const [state, shoppingCartDispatch] = useReducer(shoppingCartReducer, initialState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.data));
  }, [state.data]);

  const addItem = (payload: IShoppingCartItemType) => {
    shoppingCartDispatch({
      type: actionTypes.ADD_ITEM,
      payload,
    });
  };
  const incrementQuantityItem = (payload: IShoppingCartItemType) => {
    shoppingCartDispatch({
      type: actionTypes.INCREMENT_QUANTITY_ITEM,
      payload,
    });
  };
  const decrementQuantityItem = (payload: IShoppingCartItemType) => {
    shoppingCartDispatch({
      type: actionTypes.DECREMENT_QUANTITY_ITEM,
      payload,
    });
  };
  const deleteItem = (payload: IShoppingCartItemType) => {
    shoppingCartDispatch({
      type: actionTypes.DELETE_ITEM,
      payload,
    });
  };

  const contextValue = {
    data: state.data,
    addItem: useCallback((payload: IShoppingCartItemType) => {
      addItem(payload);
    }, []),
    incrementQuantityItem: useCallback((payload: IShoppingCartItemType) => {
      incrementQuantityItem(payload);
    }, []),
    decrementQuantityItem: useCallback((payload: IShoppingCartItemType) => {
      decrementQuantityItem(payload);
    }, []),
    deleteItem: useCallback((payload: IShoppingCartItemType) => {
      deleteItem(payload);
    }, []),
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>{children}</ShoppingCartContext.Provider>
  );
};
