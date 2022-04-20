import { Button } from '../../../../components/CommonComponents';
import { useState } from 'react';
import { Info } from '../../../../components/Info';
import { ErrorMessages } from '../../../../constants/messages';
import { HardCoddedData } from '../../../../data/data';
import styled from '@emotion/styled';

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

const CustomInput = styled.input`
  width: 100%;
  text-indent: 50px;
  border: 2px solid darkgrey;
  background-image: url('../../../../components/Icons/img/search.svg');
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Search = props => {
  const { limit = 25, onSearch, currentCategory } = props;
  const [value, setValue] = useState('');

  const searchFunction = event => {
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
      onSearch(newList);
    }
  };

  return (
    <div>
      <Block>
        <CustomInput
          value={value}
          onChange={searchFunction}
          onKeyDown={event => event.key === 'Enter' && search()}
        />
        <Button disabled={value.length > limit} onClick={search}>
          Search
        </Button>
      </Block>
      <ErrorBlock>{value.length > limit && <Info>{ErrorMessages.errorSearch}</Info>}</ErrorBlock>
    </div>
  );
};
