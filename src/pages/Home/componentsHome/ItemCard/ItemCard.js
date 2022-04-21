import React, { useContext, useState } from 'react';
import { Routes } from '../../../../router';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import { setAddItem, ShoppingCartContext } from '../../../../providers/ShopingCartProvider';
import { AfterProductToCartModal } from '../Modal';
import { Button } from '../../../../components/CommonComponents';

const CardBlock = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 250px;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const Card = styled.img`
  width: 200px;
  height: 200px;
`;

const InfoProduct = styled.p`
  padding: 10px;
  text-align: justify;
  font-weight: ${props => (props.price ? 'bold' : 'normal')};
`;

const Name = styled.div`
  padding-bottom: 15px;
  font-weight: bold;
`;

export const ItemCard = props => {
  const history = useHistory();
  const { dispatch } = useContext(ShoppingCartContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { id, name, image, description, price } = props.data;
  const addItem = () => {
    dispatch(
      setAddItem({
        id,
        name,
        count: 1,
        image,
        price,
      }),
    );
    setModalIsOpen(true);
  };

  return (
    <React.Fragment>
      <CardBlock>
        <Name>{name}</Name>
        <Card alt={name} src={image} />
        <InfoProduct>{description}</InfoProduct>
        <InfoProduct price>{price}</InfoProduct>
        <Button onClick={addItem}>Buy</Button>
      </CardBlock>
      <AfterProductToCartModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        redirect={() => history.push(Routes.Auth.ShoppingCart)}
      />
    </React.Fragment>
  );
};
