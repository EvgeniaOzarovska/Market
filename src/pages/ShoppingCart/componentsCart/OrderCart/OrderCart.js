import React, { useContext } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Counter } from '../Counter';
import { SmallIcon } from '../../../../components/CommonComponents';
import { setDeleteItem, ShoppingCartContext } from '../../../../providers/ShopingCartProvider';
import close from '../../../../components/Icons/img/close_black_24dp.svg';

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

export const OrderCart = props => {
  const { dispatch } = useContext(ShoppingCartContext);

  const { id, image, name, count, price } = props.card;

  return (
    <Block key={id}>
      <Picture src={image} alt="name" />
      <NameProduct>{name}</NameProduct>
      <Counter count={count} id={id} />
      <PriceProduct>{price * count} UAH</PriceProduct>
      <SmallIcon
        src={close}
        alt="close"
        onClick={() => {
          dispatch(setDeleteItem({ id }));
        }}
      />
    </Block>
  );
};
OrderCart.propTytpes = {
  id: PropTypes.number,
  count: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
};
