import styled from '@emotion/styled';

const CustomLink = styled.a`
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

export const Category = props => {
  return <CustomLink {...props}>{props.children}</CustomLink>;
};
