import React, { useContext, useState } from 'react';
import { Routes } from '../../../../router';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import { setAddItem, ShoppingCartContext } from '../../../../providers/ShopingCartProvider';
import { AfterProductToCartModal } from '../Modal';
import { Button } from '../../../../components/CommonComponents';
import { MyThemeContext } from '../../../../providers/AppThemeProvider';

type InfoProductType = {
  price: boolean;
};

export type CardType = {
  id: number;
  description: string;
  name: string;
  image: string;
  price: number;
};

type ItemCardType = {
  data: CardType;
};

const CardBlock = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 250px;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  background-color: transparent;
`;

const Card = styled.img`
  width: 200px;
  height: 200px;
`;

const InfoProduct = styled.p<InfoProductType>`
  padding: 10px;
  text-align: justify;
  font-weight: ${props => (props.price ? 'bold' : 'normal')};
`;

const Name = styled.div`
  padding-bottom: 15px;
  font-weight: bold;
`;

export const ItemCard = (props: ItemCardType) => {
  const history = useHistory();
  const { dispatch } = useContext(ShoppingCartContext);
  const { theme } = useContext(MyThemeContext);
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

  const modalOpen = () => {
    setModalIsOpen(false);
  };
  const redirectFunction = () => {
    history.push(Routes.Auth.ShoppingCart);
  };

  return (
    <React.Fragment>
      <CardBlock>
        <Name>{name}</Name>
        <Card alt={name} src={image} />
        <InfoProduct price={false}>{description}</InfoProduct>
        <InfoProduct price>{price}</InfoProduct>
        <Button next={false} cartstyle={false} theme={theme} onClick={addItem}>
          Buy
        </Button>
      </CardBlock>
      <AfterProductToCartModal
        isOpen={modalIsOpen}
        onClose={modalOpen}
        redirect={redirectFunction}
      />
    </React.Fragment>
  );
};
