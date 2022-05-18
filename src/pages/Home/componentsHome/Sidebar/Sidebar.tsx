import styled from '@emotion/styled';
import { HardCoddedData } from '../../../../data/data';
import { ICustomBG } from '../../../../components/Footer/Footer';

export interface ItemType {
  name: string;
  key: string;
}

interface SidebarType {
  setValue: (item: ItemType) => void;
}

export const Category = styled.a`
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
const CustomSidebar = styled.aside<ICustomBG>`
  border: 1px solid grey;
  border-bottom: none;
  background-color: ${props => props.theme.backgroundColorComponent};
`;

export const Sidebar = (props: SidebarType) => {
  return (
    <CustomSidebar>
      {HardCoddedData.categories.map((item: ItemType) => {
        return (
          <Category key={item.key} onClick={() => props.setValue(item)}>
            {item.name}
          </Category>
        );
      })}
    </CustomSidebar>
  );
};
