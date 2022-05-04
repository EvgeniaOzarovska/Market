import React from 'react';
import { useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { useReducer } from 'react';
import styled from '@emotion/styled';

const themeLight = {
  id: 'light',
  color: 'black',
  backgroundColor: 'whitesmoke',
  backgroundColorComponent: 'lightsteelblue',
};

const themeDark = {
  id: 'dark',
  color: 'whitesmoke',
  backgroundColor: 'cadetblue',
  backgroundColorComponent: 'teal',
  backgroundBtn: 'mediumaquamarine',
};

export const MyThemeContext = React.createContext();

const actionTypes = {
  THEME: 'CHANGE_THEME',
};

export const setTheme = () => ({
  type: actionTypes.THEME,
});

const reducer = (state, action) => {
  const { THEME } = actionTypes;

  switch (action.type) {
    case THEME: {
      const currTheme = localStorage.getItem('theme');
      if (currTheme === 'light') {
        return { theme: themeDark };
      } else {
        return { theme: themeLight };
      }
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

const StyledTheme = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${props => {
    return props.theme.color;
  }};
  background-color: ${props => {
    return props.theme.backgroundColor;
  }};
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
