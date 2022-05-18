import styled from '@emotion/styled';
import React, { useState } from 'react';
import { HardCoddedData } from '../../../../data/data';
import { Button, Icon } from '../../../../components/CommonComponents';
import { ErrorMessages } from '../../../../constants/messages';
import problem from '../../../../components/Icons/img/report_problem.svg';
import pic from '../Search/search.svg';
import { CardType } from '../ItemCard/ItemCard';

interface SearchType {
  limit: number;
  currentCategory: currentCategoryEnum;
  onSearch: (list: CardType[]) => void;
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
  background-image: url(${pic});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Search = (props: SearchType) => {
  const { limit = 25, onSearch, currentCategory } = props;
  const [value, setValue] = useState('');

  const searchFunction = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const search = () => {
    const trimmedText = value.trim().toLowerCase();
    if (value === '') {
      return onSearch(HardCoddedData[currentCategory]);
    } else {
      const newList = HardCoddedData[currentCategory].filter(
        item =>
          item.name.toLowerCase().includes(trimmedText) ||
          item.description.toLowerCase().includes(trimmedText),
      );
      return onSearch(newList);
    }
  };

  return (
    <div>
      <Block>
        <Input
          value={value}
          onChange={searchFunction}
          onKeyDown={event => event.key === 'Enter' && search()}
        />
        <Button next={false} cartstyle={false} disabled={value.length > limit} onClick={search}>
          Search
        </Button>
      </Block>
      <ErrorBlock>
        {value.length > limit && (
          <div>
            <Icon problem src={problem} alt={'problem'} />
            {ErrorMessages.errorSearch}
          </div>
        )}
      </ErrorBlock>
    </div>
  );
};
