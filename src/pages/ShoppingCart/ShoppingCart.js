import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Routes } from '../../router';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../providers/ShopingCartProvider';
import { OrderCart } from './componentsCart/OrderCart';
import { Button, Icon } from '../../components/CommonComponents';
import { Page } from '../../components/CommonComponents';
import { ErrorMessages } from '../../constants/messages';
import problem from '../../components/Icons/img/report_problem.svg';

const Container = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 10px 200px;
`;

const MainBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 10px;
`;

const InfoBlock = styled.div`
  margin: ${props => props.message ? '30px auto': '0 auto'};
`;

export const ShoppingCart = () => {
  const { state } = useContext(ShoppingCartContext);
  const { data } = state;
  const calculateAmountPrice = data => {
    return data.reduce((prev, curr) => {
      return prev + curr.price * curr.count;
    }, 0);
  };

  return (
    <Container>
      <MainBlock>
        <Page>
          {data.length > 0 ? (
            data.map(cartItem => {
              return <OrderCart key={cartItem.id} card={cartItem} />;
            })
          ) : (
            <InfoBlock message>
                <Icon problem src={problem} alt={'problem'} /> {ErrorMessages.emptyShoppingCart}
            </InfoBlock>
          )}
          {data.length > 0 ? (
            <ButtonBlock>
              Total amount: {calculateAmountPrice(data)} UAH
              <Link to={Routes.Auth.Home}>
                <Button cartstyle>Сontinue shopping</Button>
              </Link>
              <Button cartstyle>Сheckout</Button>
            </ButtonBlock>
          ) : (
            <InfoBlock>
              <Link to={Routes.Auth.Home}>
                <Button cartstyle>Сontinue shopping</Button>
              </Link>
            </InfoBlock>
          )}
        </Page>
      </MainBlock>
    </Container>
  );
};
