import styled from '@emotion/styled';

const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  border: 1px solid grey;
  background-color: transparent;
  color: black;
  &:not(:disabled):hover {
    color: whitesmoke;
    background-color: slategrey;
    border-color: whitesmoke;
    transition: 0.3s;
  }

  &:disabled {
    cursor: auto;
    opacity: 0.5;
  }
  &.cartButton {
    text-align: center;
    margin: 10px;
    width: 200px;
  }
`;

export const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
