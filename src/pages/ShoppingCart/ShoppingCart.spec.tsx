import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom';
import {
  IShoppingCartItem,
  ShoppingCartContext,
  ShoppingCartProvider,
} from '../../providers/ShopingCartProvider';
import { createMemoryHistory } from 'history';
import { ShoppingCart } from './ShoppingCart';
import React, { useContext, useEffect } from 'react';
import { ItemCard } from '../Home/componentsHome/ItemCard';

describe('Shopping cart', () => {
  const renderShoppingCart = () => {
    render(
      <Router history={history}>
        <ShoppingCartProvider>
          <ShoppingCart />
        </ShoppingCartProvider>
      </Router>,
    );
  };

  const shoppingCartMock = [
    {
      id: 10,
      name: 'test',
      image: 'test',
      description: 'test',
      price: 5,
      count: 1,
    },
    {
      id: 11,
      name: 'test name',
      image: 'test-src',
      description: 'test description',
      price: 10,
      count: 1,
    }
  ];

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

  const history = createMemoryHistory();
  it('should renders shopping cart', () => {
    renderShoppingCart();
    expect(screen.getByTestId('page-container')).toBeInTheDocument();
  });

  it('should calculate amount price', async () => {
    localStorage.setItem('cart', JSON.stringify(shoppingCartMock));
    render(
      <Router history={history}>
        <ShoppingCartProvider>
          <ItemCard data={shoppingCartMock[1]} />
          <ShoppingCart />
          <MySpyComponent />
        </ShoppingCartProvider>
      </Router>,
    );
    fireEvent.click(screen.getByTestId('buy-btn'));
    await waitFor(() => {
      const result = currentData.reduce((prev: number, curr: IShoppingCartItem) => {
        return prev + curr.price * curr.count;
      }, 0);
      expect(screen.getByTestId('total-amount')).toContainHTML(`Total amount: ${result} UAH`);
    });
  });
});
