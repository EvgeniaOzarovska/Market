import styled from '@emotion/styled';

export const Button = styled.button`
  width: ${props => (props.next ? '120px' : '200px')};
  height: ${props => (props.next ? '25px' : '50px')};
  border: 1px solid grey;
  background-color: ${props => props.theme.backgroundBtn};
  color: black;
  text-align: center;
  margin: ${props => (props.cartstyle ? '10px' : '0')};
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
`;

export const Icon = styled.img`
  height: 30px;
  margin: 15px;
  border: ${props => (props.problem ? 'none' : '1px solid black')};

  &:hover {
    background-color: whitesmoke;
    cursor: pointer;
    transition: 0.3s;
  }
`;

export const SmallIcon = styled(Icon)`
  height: 20px;
`;

export const BigIcon = styled(Icon)`
  height: 40px;
  float: right;
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const PageContainer = styled.main`
  display: flex;
  flex: 1;
  background-color: ${props => props.theme.backgroundColor};
`;
