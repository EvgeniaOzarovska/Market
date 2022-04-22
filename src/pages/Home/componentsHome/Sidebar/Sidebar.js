import { HardCoddedData } from '../../../../data/data';
import styled from '@emotion/styled';

const CustomSidebar = styled.aside`
  border: 1px solid grey;
  border-bottom: none;
  background-color: lightsteelblue;
`;

export const Category = styled.a`
  width: 200px;
  display: block;
  color: black;
  padding: 15px;
  border-bottom: 1px solid grey;

  &:hover {
    background-color: whitesmoke;
    color: darkslateblue;
    cursor: pointer;
    transition: 0.3s;
  }
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
