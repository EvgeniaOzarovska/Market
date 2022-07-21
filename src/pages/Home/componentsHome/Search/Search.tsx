import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Button, Icon } from '../../../../components/CommonComponents';
import { ErrorMessages } from '../../../../constants/messages';
import reportProblemImg from '../../../../components/Icons/img/report_problem.svg';
import searchImg from '../Search/search.svg';
import { ICard } from '../ItemCard/ItemCard';
import { fetchItemCards } from '../../../../requests/reguests';

interface ISearch {
  limit?: number;
  currentCategory: currentCategoryEnum;
  onSearch: (list: ICard[]) => void;
}
export enum currentCategoryEnum {
  smartphone = 'smartphone',
  fitness_equipment = 'fitness_equipment',
  furniture = 'furniture',
  sanitary_ware = 'sanitary_ware',
  watch = 'watch',
}

const Block = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
`;

const ErrorBlock = styled.div`
  color: red;
  height: 16px;
  font-size: 12px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  text-indent: 50px;
  border: 2px solid darkgrey;
  background-image: url(${searchImg});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Search = (props: ISearch) => {
  const { limit = 25, onSearch, currentCategory } = props;
  const [value, setValue] = useState('');

  const searchFunction = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const search = async () => {
    const trimmedText = value.trim().toLowerCase();
    const itemList = await fetchItemCards(currentCategory);
    if (!trimmedText) {
      return onSearch(itemList);
    } else {
      const newList = itemList.filter(
        item =>
          item.name.toLowerCase().includes(trimmedText) ||
          item.description.toLowerCase().includes(trimmedText),
      );
      return onSearch(newList);
    }
  };

  return (
    <div data-testid="search-block">
      <Block>
        <Input
          data-testid="search-input"
          value={value}
          onChange={searchFunction}
          onKeyDown={event => event.key === 'Enter' && search()}
        />
        <Button data-testid="search-btn" disabled={value.length > limit} onClick={search}>
          Search
        </Button>
      </Block>
      <ErrorBlock>
        {value.length > limit && (
          <div data-testid="error-block">
            <Icon problem src={reportProblemImg} alt={'problem'} />
            {ErrorMessages.errorSearch}
          </div>
        )}
      </ErrorBlock>
    </div>
  );
};
