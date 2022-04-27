import React from 'react';
import { useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { useReducer } from 'react';

const themeLight = {
  id: 'light',
  colorText: 'black',
  colorBackground: 'red',
};

const themeDark = {
  id: 'dark',
  colorText: 'white',
  colorBackground: 'black',
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
      // eslint-disable-next-line no-console
      console.log('lt: ', state);
      return { theme: themeLight };
    }
    case DARK_THEME: {
      // eslint-disable-next-line no-console
      console.log('dt: ', state);
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

  return (
    <MyThemeContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={state.theme}>{children}</ThemeProvider>
    </MyThemeContext.Provider>
  );
};
