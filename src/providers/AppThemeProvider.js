import React from 'react';
import { useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { useReducer } from 'react';
import styled from '@emotion/styled';

const themeLight = {
  id: 'light',
  color: 'black',
  backgroundColor: 'whitesmoke',
};

const themeDark = {
  id: 'dark',
  color: 'whitesmoke',
  backgroundColor: 'cadetblue',
};

export const MyThemeContext = React.createContext();

const actionTypes = {
  LIGHT_THEME: 'LIGHT_THEME',
  DARK_THEME: 'DARK_THEME',
};

export const setLightTheme = () => ({
  type: actionTypes.LIGHT_THEME,
});

export const setDarkTheme = () => ({
  type: actionTypes.DARK_THEME,
});

const reducer = (state, action) => {
  const { LIGHT_THEME, DARK_THEME } = actionTypes;

  switch (action.type) {
    case LIGHT_THEME: {
      return { theme: themeLight };
    }
    case DARK_THEME: {
      return { theme: themeDark };
    }
    default:
      return state;
  }
};

const init = () => {
  const initialTheme = localStorage.getItem('theme');
  if (initialTheme === 'light' || null) {
    return { theme: themeLight };
  } else {
    return { theme: themeDark };
  }
};

export const MyThemeProvider = ({ children }) => {
  const initialValue = init();
  const [state, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    localStorage.setItem('theme', state.theme.id);
  }, [state.theme]);

  const StyledTheme = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    color: ${state.theme.color};
    background-color: ${state.theme.backgroundColor};
    height: 100%;
  `;

  return (
    <MyThemeContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={state.theme}>
        <StyledTheme>{children}</StyledTheme>
      </ThemeProvider>
    </MyThemeContext.Provider>
  );
};
