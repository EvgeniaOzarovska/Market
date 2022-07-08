import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Sidebar } from './componentsHome/Sidebar';
import { Search } from './componentsHome/Search';
import { Page } from '../../components/CommonComponents';
import { ErrorMessages } from '../../constants/messages';
import { ItemCard } from './componentsHome/ItemCard';
import { PageContainer } from '../../components/CommonComponents';
import { Routes, history } from '../../router';
import { useRouteMatch } from 'react-router-dom';
import { PageNotFound } from '../System/PageNotFound';
import { IItem } from './componentsHome/Sidebar/Sidebar';
import { currentCategoryEnum } from './componentsHome/Search/Search';
import { ICard } from './componentsHome/ItemCard/ItemCard';
import { fetchItemCards } from '../../requests/reguests';

const ProductBlock = styled.div`
  margin-top: 16px;
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px 2px;
  overflow-y: auto;
`;

const Message = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  padding-top: 30px;
`;

export interface ICategoryItem {
  name: string;
  key: currentCategoryEnum;
}

interface IMatchParams {
  category: currentCategoryEnum;
}

export const Home = () => {
  const routeMatch = useRouteMatch<IMatchParams>();
  const category = routeMatch.params.category;
  const [list, setList] = useState<ICard[]>([]);

  const getCartList = async (category: string) => {
    const cardList = await fetchItemCards(category);
    setList(cardList);
  };

  const CardList = () => {
 (async () => {
    await getCartList(category);
  })();
  };

  useEffect(() => {
    CardList();
  }, [category]);

  if (!list) {
    return <PageNotFound />;
  }

  const setData = async (item: IItem) => {
    history.push(Routes.Auth.Home.replace(':category', item.key));
  };

  const searchResult = (newList: ICard[]) => setList(newList);

  return (
    <PageContainer data-testid="home-page">
      <Sidebar setValue={setData} data-testid="sidebar-category" />
      <Page>
        <Search onSearch={searchResult} currentCategory={category} limit={25} />
        {list.length > 0 ? (
          <ProductBlock data-testid="product-block">
            {list.map((item: ICard) => (
              <ItemCard key={item.id} data={item} />
            ))}
          </ProductBlock>
        ) : (
          <Message data-testid="error-msg">{ErrorMessages.recordsNotFound}</Message>
        )}
      </Page>
    </PageContainer>
  );
};
