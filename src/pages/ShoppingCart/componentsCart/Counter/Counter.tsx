import React from 'react';
import styled from '@emotion/styled';
import { useContext } from 'react';
import { IShoppingCartItem, ShoppingCartContext } from '../../../../providers/ShopingCartProvider';
import { SmallIcon } from '../../../../components/CommonComponents';
import plus from '../../../../components/Icons/img/add_black_24dp.svg';
import remove from '../../../../components/Icons/img/remove_black_24dp.svg';

export interface ICounter {
  card: IShoppingCartItem;
  count: number;
}

const AddProduct = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Counter = (props: ICounter) => {
  const { incrementQuantityItem, decrementQuantityItem } = useContext(ShoppingCartContext);

  const decrementFunction = () => decrementQuantityItem(card);
  const incrementFunction = () => incrementQuantityItem(card);

  const { card, count } = props;
  return (
    <AddProduct data-testid="add-product">
      <SmallIcon src={remove} alt={remove} onClick={decrementFunction} data-testid="decrease"/>
      <p data-testid="count-result">{count}</p>
      <SmallIcon src={plus} alt={plus} onClick={incrementFunction} data-testid="increase" />
    </AddProduct>
  );
};
