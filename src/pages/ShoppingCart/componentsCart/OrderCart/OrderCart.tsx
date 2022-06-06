import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Counter } from '../Counter';
import { SmallIcon } from '../../../../components/CommonComponents';
import { IShoppingCartItem, ShoppingCartContext } from '../../../../providers/ShopingCartProvider';
import close from '../../../../components/Icons/img/close_black_24dp.svg';

export interface IOrderCart {
  card: IShoppingCartItem;
}

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
`;

const PriceProduct = styled.p`
  width: 150px;
`;

const Picture = styled.img`
  width: 80px;
  height: 80px;
`;

const NameProduct = styled.div`
  width: 200px;
`;

export const OrderCart = (props: IOrderCart) => {
  const { deleteItem } = useContext(ShoppingCartContext);
  const {
    card: { id, image, name, count, price },
    card,
  } = props;

  const deleteFunction = () => {
    deleteItem(card);
  };

  return (
    <Block key={id} data-testid="block" >
      <Picture src={image} alt="name" data-testid="block-pic"/>
      <NameProduct data-testid="block-name">{name}</NameProduct>
      <Counter count={count} card={card} data-testid="block-counter"/>
      <PriceProduct data-testid="block-price">{price * count} UAH</PriceProduct>
      <SmallIcon src={close} alt="delete" onClick={deleteFunction} data-testid="block-delete"/>
    </Block>
  );
};
