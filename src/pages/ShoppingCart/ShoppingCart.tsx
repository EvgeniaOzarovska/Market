import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Routes } from '../../router';
import { Link } from 'react-router-dom';
import { IShoppingCartItem, ShoppingCartContext } from '../../providers/ShopingCartProvider';
import { OrderCart } from './componentsCart/OrderCart';
import { Button, Icon } from '../../components/CommonComponents';
import { Page } from '../../components/CommonComponents';
import { ErrorMessages } from '../../constants/messages';
import { PageContainer } from '../../components/CommonComponents';
import problem from '../../components/Icons/img/report_problem.svg';

const MainBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 10px 200px;
`;

const ButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 10px;
`;

const InfoBlock = styled.div`
  margin: 0 auto;
`;

export const ShoppingCart = () => {
  const { data } = useContext(ShoppingCartContext);

  const calculateAmountPrice = (data: IShoppingCartItem[]) => {
    return data.reduce((prev, curr) => {
      return prev + curr.price * curr.count;
    }, 0);
  };

  return (
    <PageContainer data-testid="page-container">
      <MainBlock>
        <Page>
          {data.length > 0 ? (
            data.map((cartItem: IShoppingCartItem) => {
              return <OrderCart key={cartItem.id} card={cartItem} />;
            })
          ) : (
            <InfoBlock data-testid="empty-cart">
              <Icon problem src={problem} alt={'problem'} /> {ErrorMessages.emptyShoppingCart}
            </InfoBlock>
          )}
          {data.length > 0 ? (
            <ButtonBlock data-testid='total-amount'>
              Total amount: {calculateAmountPrice(data)} UAH
              <Link to={Routes.Auth.DefaultHome}>
                <Button data-testid='continue-btn' cartstyle>Сontinue shopping</Button>
              </Link>
              <Button data-testid='checkout-btn' cartstyle>Сheckout</Button>
            </ButtonBlock>
          ) : (
            <InfoBlock>
              <Link to={Routes.Auth.DefaultHome}>
                <Button data-testid='continue-btn' cartstyle> Сontinue shopping</Button>
              </Link>
            </InfoBlock>
          )}
        </Page>
      </MainBlock>
    </PageContainer>
  );
};
