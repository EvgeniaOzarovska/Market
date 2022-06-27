import { Counter, ICounter } from './Counter';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import {
  IShoppingCartItem,
  ShoppingCartContext,
  ShoppingCartProvider,
} from '../../../../providers/ShopingCartProvider';
import { Router } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { OrderCart } from '../OrderCart';

describe('Counter', () => {
  const history = createMemoryHistory();
  const renderShoppingCart = (shoppingCartMock: IShoppingCartItem) => {
    return render(
      <Router history={history}>
        <ShoppingCartProvider>
          <OrderCart card={shoppingCartMock} />
          <MySpyComponent />
        </ShoppingCartProvider>
      </Router>,
    );
  };

  const increaseShoppingCartMock = [
    {
      id: 10,
      name: 'test',
      image: 'test',
      description: 'test',
      price: 1,
      count: 1,
    },
  ];

  const decreaseShoppingCartMock = [
    {
      id: 10,
      name: 'test',
      image: 'test',
      description: 'test',
      price: 1,
      count: 5,
    },
  ];

  const counterMock: ICounter = {
    card: {
      id: 1,
      name: 'test',
      count: 1,
      image: 'test',
      price: 1,
    },
    count: 1,
  };

  const renderCounter = () => {
    return render(
      <Router history={history}>
        <ShoppingCartProvider>
          <Counter card={counterMock.card} count={counterMock.count} />
        </ShoppingCartProvider>
      </Router>,
    );
  };

  it('should renders add product block', () => {
    renderCounter();
    expect(screen.getByTestId('add-product')).toBeInTheDocument();
  });

  let currentData: any;
  const MySpyComponent = () => {
    const { data } = useContext(ShoppingCartContext);
    useEffect(() => {
      currentData = data;
    }, [data]);
    return null;
  };
  afterEach(() => {
    currentData = undefined;
    localStorage.clear();
  });

  it('should increase the number', async () => {
    localStorage.setItem('cart', JSON.stringify(increaseShoppingCartMock));
    renderShoppingCart(increaseShoppingCartMock[0]);
    expect(screen.getByTestId('increase')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('increase'));
    await waitFor(() => expect(currentData[0].count).toBe(increaseShoppingCartMock[0].count + 1));
    fireEvent.click(screen.getByTestId('increase'));
    await waitFor(() => expect(currentData[0].count).toBe(increaseShoppingCartMock[0].count + 2));
  });

  it('should decrease the number', async () => {
    localStorage.setItem('cart', JSON.stringify(decreaseShoppingCartMock));
    renderShoppingCart(decreaseShoppingCartMock[0]);
    expect(screen.getByTestId('decrease')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('decrease'));
    await waitFor(() => expect(currentData[0].count).toBe(decreaseShoppingCartMock[0].count - 1));
    fireEvent.click(screen.getByTestId('decrease'));
    await waitFor(() => expect(currentData[0].count).toBe(decreaseShoppingCartMock[0].count - 2));
  });
});
