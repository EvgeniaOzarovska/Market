import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { HardCoddedData } from '../../data/data';
import { Sidebar } from './componentsHome/Sidebar';
import { Search } from './componentsHome/Search';
import { Page } from '../../components/CommonComponents';
import { ErrorMessages } from '../../constants/messages';
import { ItemCard } from './componentsHome/ItemCard';
import { PageContainer } from '../../components/CommonComponents';
import { Routes, history } from '../../router';
import { useRouteMatch } from 'react-router-dom';
import { PageNotFound } from '../System/PageNotFound';
import { ItemType } from './componentsHome/Sidebar/Sidebar';
import { currentCategoryEnum } from './componentsHome/Search/Search';
import { CardType } from './componentsHome/ItemCard/ItemCard';

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

export interface CategoryItemType {
  name: string;
  key: currentCategoryEnum;
}

interface MatchParams {
  category: currentCategoryEnum;
}

export const Home = () => {
  const routeMatch = useRouteMatch<MatchParams>();
  const category = routeMatch.params.category;
  const [list, setList] = useState<CardType[]>(HardCoddedData[category]);

  useEffect(() => {
    setList(HardCoddedData[category]);
  }, [category]);

  if (!list) {
    return <PageNotFound />;
  }

  const setData = (item: ItemType) => {
    const newItem: CategoryItemType = item as CategoryItemType;
    setList(HardCoddedData[newItem.key]);
    history.push(Routes.Auth.Home.replace(':category', item.key));
  };

  const searchResult = (newList: CardType[]) => setList(newList);

  return (
    <PageContainer>
      <Sidebar setValue={setData} />
      <Page>
        <Search onSearch={searchResult} currentCategory={category} limit={25} />
        {list.length > 0 ? (
          <ProductBlock>
            {list.map((item: CardType) => (
              <ItemCard key={item.id} data={item} />
            ))}
          </ProductBlock>
        ) : (
          <Message>{ErrorMessages.recordsNotFound}</Message>
        )}
      </Page>
    </PageContainer>
  );
};
