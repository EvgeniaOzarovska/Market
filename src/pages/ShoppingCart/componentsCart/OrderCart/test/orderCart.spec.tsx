import { OrderCart, IOrderCart } from '../OrderCart';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import {
  ShoppingCartContext,
  ShoppingCartProvider,
} from '../../../../../providers/ShopingCartProvider';
import { useContext, useEffect } from 'react';

describe('OrderCart', () => {
  const history = createMemoryHistory();

  const cartMock: IOrderCart = {
    card: {
      id: 1,
      name: 'test',
      count: 1,
      image: 'test',
      price: 1,
    },
  };

  const shoppingCartMock = [
    {
      id: 10,
      name: 'test',
      image: 'test',
      description: 'test',
      price: 1,
      count: 5,
    },
  ];

  it('should renders OrderCart', function () {
    render(
      <Router history={history}>
        <ShoppingCartProvider>
          <OrderCart card={cartMock.card} />
        </ShoppingCartProvider>
      </Router>,
    );
    expect(screen.getByTestId('block')).toBeInTheDocument();
    expect(screen.getByTestId('block-pic')).toBeInTheDocument();
    expect(screen.getByTestId('block-pic')).toHaveAttribute('src');
    expect(screen.getByTestId('block-name')).toBeInTheDocument();
    expect(screen.getByTestId('block-price')).toBeInTheDocument();
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

  it('should decrease the number', async () => {
    localStorage.setItem('cart', JSON.stringify(shoppingCartMock));
    render(
      <Router history={history}>
        <ShoppingCartProvider>
          <OrderCart card={shoppingCartMock[0]} />
          <MySpyComponent />
        </ShoppingCartProvider>
      </Router>,
    );
    expect(screen.getByTestId('block-delete')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('block-delete'));
    await waitFor(() => expect(currentData.length).toBe(0));
  });
});
