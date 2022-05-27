import { ItemCard } from '../ItemCard';
import React, { useContext, useEffect } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import {
  ShoppingCartContext,
  ShoppingCartProvider,
} from '../../../../../providers/ShopingCartProvider';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('<ItemCard/>', () => {
  const history = createMemoryHistory();
  const cardMock = {
    id: 1,
    name: 'test',
    image: 'test',
    description: 'test',
    price: 1,
  };
  it('Should render Card  block', () => {
    render(<ItemCard data={cardMock} />);
    expect(screen.getByTestId('card-block')).toBeInTheDocument();
    expect(screen.getByTestId('card-block-name')).toBeInTheDocument();
    expect(screen.getByTestId('card-block-img')).toBeInTheDocument();
    expect(screen.getByTestId('card-block-description')).toBeInTheDocument();
    expect(screen.getByTestId('card-block-price')).toBeInTheDocument();
    expect(screen.getByTestId('buy-btn')).toBeInTheDocument();
    expect(screen.getByTestId('card-block-name')).not.toBeNull();
    expect(screen.getByTestId('card-block-img')).not.toBeNull();
    expect(screen.getByTestId('card-block-description')).not.toBeNull();
    expect(screen.getByTestId('card-block-price')).not.toBeNull();
  });

  describe('Add new item in shopping cart', () => {
    const shoppingCartMock = [
      {
        id: 1,
        name: 'test',
        image: 'test',
        description: 'test',
        price: 1,
        count: 1,
      },
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
    });
    it('should add item in the cart', async () => {
      localStorage.setItem('cart', JSON.stringify(shoppingCartMock));
      render(
        <Router history={history}>
          <ShoppingCartProvider>
            <ItemCard data={cardMock} />
            <MySpyComponent />
          </ShoppingCartProvider>
          ,
        </Router>,
      );
      expect(currentData.length).toBe(shoppingCartMock.length);
      const buyBtn = screen.getByTestId('buy-btn');
      fireEvent.click(buyBtn);
      await waitFor(() => expect(currentData[0].count).toBe(shoppingCartMock[0].count + 1));
      expect(screen.getByTestId('card-block-modal')).toBeInTheDocument();
    });
  });
});
