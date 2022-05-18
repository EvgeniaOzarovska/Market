import React from 'react';
import styled from '@emotion/styled';
import { useContext } from 'react';
import {
  IShoppingCartItemType,
  ShoppingCartContext,
} from '../../../../providers/ShopingCartProvider';
import { SmallIcon } from '../../../../components/CommonComponents';
import plus from '../../../../components/Icons/img/add_black_24dp.svg';
import remove from '../../../../components/Icons/img/remove_black_24dp.svg';

interface ICounterType {
  card: IShoppingCartItemType;
  count: number;
}

const AddProduct = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Counter = (props: ICounterType) => {
  const { incrementQuantityItem, decrementQuantityItem } = useContext(ShoppingCartContext);

  const { card, count } = props;
  return (
    <AddProduct>
      <SmallIcon
        problem={false}
        src={remove}
        alt={remove}
        onClick={() => decrementQuantityItem(card)}
      />
      <p>{count}</p>
      <SmallIcon
        problem={false}
        src={plus}
        alt={plus}
        onClick={() => incrementQuantityItem(card)}
      />
    </AddProduct>
  );
};
