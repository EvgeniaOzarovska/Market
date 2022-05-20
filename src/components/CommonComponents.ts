import styled from '@emotion/styled';

interface IThemeBtn {
  backgroundBtn: string;
}
interface IThemePageContainer {
  theme?: {
    backgroundColor: string;
  };
}

interface IButton {
  next?: boolean;
  theme?: IThemeBtn;
  cartstyle?: boolean;
}

interface IImg {
  problem?: boolean;
}

export const Button = styled.button<IButton>`
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

export const Icon = styled.img<IImg>`
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

export const PageContainer = styled.main<IThemePageContainer>`
  display: flex;
  flex: 1;
  background-color: ${props => props.theme.backgroundColor};
`;
