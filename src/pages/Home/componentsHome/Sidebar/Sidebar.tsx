import styled from '@emotion/styled';
import { ICustomBG } from '../../../../components/Footer/Footer';
import { useEffect, useState } from 'react';
import { fetchCategories } from '../../../../requests/reguests';

export interface IItem {
  name: string;
  key: string;
}

interface ISidebar {
  setValue: (item: IItem) => void;
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

export const Sidebar = (props: ISidebar) => {
  const { setValue } = props;
  const [categoriesList, setCategoriesList] = useState([]);
  useEffect(() => {
    (async () => {
      const categories = await fetchCategories();
      setCategoriesList(categories);
    })();
  }, []);

  return (
    <CustomSidebar data-testid="sidebar-block">
      {categoriesList.length > 0 ? (
        categoriesList.map((item: IItem) => {
          return (
            <Category data-testid="sidebar-category" key={item.key} onClick={() => setValue(item)}>
              {item.name}
            </Category>
          );
        })
      ) : (
        <span>ERROR</span>
      )}
    </CustomSidebar>
  );
};
