import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import {
  setDecrementQuantityItem,
  setIncrementQuantityItem,
  ShoppingCartContext,
} from '../../../../providers/ShopingCartProvider';
import { SmallIcon } from '../../../../components/CommonComponents';
import plus from '../../../../components/Icons/img/add_black_24dp.svg';
import remove from '../../../../components/Icons/img/remove_black_24dp.svg';

const AddProduct = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Counter = props => {
  const { dispatch } = useContext(ShoppingCartContext);

  const { id, count } = props;
  return (
    <AddProduct>
      <SmallIcon
        src={remove}
        alt={remove}
        onClick={() => dispatch(setDecrementQuantityItem({ id }))}
      />
      <p>{count}</p>
      <SmallIcon src={plus} alt={plus} onClick={() => dispatch(setIncrementQuantityItem({ id }))} />
    </AddProduct>
  );
};
Counter.propTypes = {
  id: PropTypes.number,
  count: PropTypes.number,
};
