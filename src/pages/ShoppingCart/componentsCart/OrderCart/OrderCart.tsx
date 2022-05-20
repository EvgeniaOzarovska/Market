import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Counter } from '../Counter';
import { SmallIcon } from '../../../../components/CommonComponents';
import { IShoppingCartItem, ShoppingCartContext } from '../../../../providers/ShopingCartProvider';
import close from '../../../../components/Icons/img/close_black_24dp.svg';

interface IOrderCart {
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
    <Block key={id}>
      <Picture src={image} alt="name" />
      <NameProduct>{name}</NameProduct>
      <Counter count={count} card={card} />
      <PriceProduct>{price * count} UAH</PriceProduct>
      <SmallIcon src={close} alt="close" onClick={deleteFunction} />
    </Block>
  );
};
