import styled from '@emotion/styled';

const CustomButton = styled.button`
  width: 200px;
  height: 50px;
  border: 1px solid grey;
  background-color: transparent;
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

export const Button = ({ children, ...props }) => {
  return <CustomButton {...props}>{children}</CustomButton>;
};

const CustomIcon = styled.img`
  height: ${props => (props.cart ? '20px' : props.problem ? '30px' : '40px')};
  float: ${props => (props.cart ? 'none' : props.problem ? 'none' : 'right')};
  margin: ${props => (props.cart ? '5px' : '15px')};
  border: ${props => (props.problem ? 'none' : '1px solid black')};

  &:hover {
    background-color: whitesmoke;
    cursor: pointer;
    transition: 0.3s;
  }
`;

export const Icon = ({ children, ...props }) => {
  return <CustomIcon {...props} alt={props.name} src={props.src} />;
};

const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Page = props => {
  return <CustomContainer>{props.children}</CustomContainer>;
};
