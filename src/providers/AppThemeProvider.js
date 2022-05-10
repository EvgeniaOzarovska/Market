import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { useReducer } from 'react';

const Theme = {
  light: {
    id: 'light',
    color: 'black',
    backgroundColor: 'whitesmoke',
    backgroundColorComponent: 'lightsteelblue',
  },
  dark: {
    id: 'dark',
    color: 'whitesmoke',
    backgroundColor: 'cadetblue',
    backgroundColorComponent: 'teal',
    backgroundBtn: 'mediumaquamarine',
  },
};

export const MyThemeContext = React.createContext();

const actionTypes = {
  THEME: 'CHANGE_THEME',
};

export const setTheme = payload => ({
  type: actionTypes.THEME,
  payload,
});

export const themeTypes = {
  LIGHT: 'light',
  DARK: 'dark',
};

const reducer = (state, action) => {
  const { THEME } = actionTypes;

  switch (action.type) {
    case THEME: {
      return { theme: Theme[action.payload] };
    }
    default:
      return state;
  }
};

const init = () => {
  const initialTheme = localStorage.getItem('theme');
  if (initialTheme === 'light' || null) {
    return { theme: Theme.light };
  } else {
    return { theme: Theme.dark };
  }
};

const StyledTheme = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.backgroundColor};
  height: 100%;
`;

export const MyThemeProvider = ({ children }) => {
  const initialValue = init();
  const [state, dispatch] = useReducer(reducer, initialValue);
  useEffect(() => {
    localStorage.setItem('theme', state.theme.id);
  }, [state.theme]);

  return (
    <MyThemeContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={state.theme}>
        <StyledTheme>{children}</StyledTheme>
      </ThemeProvider>
    </MyThemeContext.Provider>
  );
};

MyThemeProvider.propTypes = {
  children: PropTypes.array,
};
