import { HardCoddedData } from '../../../../data/data';
import { Category } from '../Category';
import styled from '@emotion/styled';

const CustomSidebar = styled.aside`
  border: 1px solid grey;
  border-bottom: none;
  background-color: lightsteelblue;
`;

export const Sidebar = props => {
  return (
    <CustomSidebar>
      {HardCoddedData.categories.map(item => {
        return (
          <Category key={item.key} onClick={() => props.setValue(item)}>
            {item.name}
          </Category>
        );
      })}
    </CustomSidebar>
  );
};
