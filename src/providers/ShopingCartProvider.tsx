import React, { useEffect, useReducer } from 'react';

export interface IShoppingCartItem {
  id: number;
  name: string;
  count: number;
  image: string;
  price: number;
}

interface IShoppingCartAction {
  type: string;
  payload: IShoppingCartItem;
}

export interface IShoppingCartContextType {
  data: IShoppingCartItem[];
  addItem: (payload: IShoppingCartItem) => void;
  incrementQuantityItem: (payload: IShoppingCartItem) => void;
  decrementQuantityItem: (payload: IShoppingCartItem) => void;
  deleteItem: (payload: IShoppingCartItem) => void;
}

const actionTypes = {
  ADD_ITEM: 'ADD_ITEM',
  INCREMENT_QUANTITY_ITEM: 'INCREMENT_QUANTITY_ITEM',
  DECREMENT_QUANTITY_ITEM: 'DECREMENT_QUANTITY_ITEM',
  DELETE_ITEM: 'DELETE_ITEM',
};

interface IShoppingCartState {
  data: IShoppingCartItem[];
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
  const { payload, type } = action;

  switch (type) {
    case ADD_ITEM: {
      const cartItemIndex = data.findIndex(
        (cartItem: IShoppingCartItem) => cartItem.id === payload.id,
      );
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
        data: data.map((item: IShoppingCartItem) => {
          if (item.id === payload.id) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        }),
      };
    }
    case DECREMENT_QUANTITY_ITEM: {
      return {
        data: data.map((item: IShoppingCartItem) => {
          if (item.id === payload.id && item.count > 1) {
            return { ...item, count: item.count - 1 };
          }
          return item;
        }),
      };
    }
    case DELETE_ITEM: {
      const updatedCart = data.filter((cartItem: IShoppingCartItem) => cartItem.id !== payload.id);
      return { data: updatedCart };
    }
    default:
      return state;
  }
};

const init = () => {
  const cartInfo = localStorage.getItem('cart');
  if (cartInfo === null) {
    return { data: [] };
  } else {
    return { data: JSON.parse(cartInfo) };
  }
};

export const ShoppingCartProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  const initialState = init();
  const [state, shoppingCartDispatch] = useReducer(shoppingCartReducer, initialState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.data));
  }, [state.data]);

  const addItem = (payload: IShoppingCartItem) => {
    shoppingCartDispatch({
      type: actionTypes.ADD_ITEM,
      payload,
    });
  };
  const incrementQuantityItem = (payload: IShoppingCartItem) => {
    shoppingCartDispatch({
      type: actionTypes.INCREMENT_QUANTITY_ITEM,
      payload,
    });
  };
  const decrementQuantityItem = (payload: IShoppingCartItem) => {
    shoppingCartDispatch({
      type: actionTypes.DECREMENT_QUANTITY_ITEM,
      payload,
    });
  };
  const deleteItem = (payload: IShoppingCartItem) => {
    shoppingCartDispatch({
      type: actionTypes.DELETE_ITEM,
      payload,
    });
  };

  const contextValue = {
    data: state.data,
    addItem: (payload: IShoppingCartItem) => {
      addItem(payload);
    },
    incrementQuantityItem: (payload: IShoppingCartItem) => {
      incrementQuantityItem(payload);
    },
    decrementQuantityItem: (payload: IShoppingCartItem) => {
      decrementQuantityItem(payload);
    },
    deleteItem: (payload: IShoppingCartItem) => {
      deleteItem(payload);
    },
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>{children}</ShoppingCartContext.Provider>
  );
};
