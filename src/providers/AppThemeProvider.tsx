import React, { useCallback, useReducer, useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

export interface IMyThemeContextType {
  theme: IState;
  changeTheme: (payload: 'light' | 'dark') => void;
}

export interface IThemeType {
  theme: IState;
}

export interface IState {
  id: string;
  color: string;
  backgroundColor: string;
  backgroundColorComponent: string;
  backgroundBtn: string;
}

interface IAction {
  type: string;
  payload: 'light' | 'dark';
}

const Theme = {
  light: {
    id: 'light',
    color: 'black',
    backgroundColor: 'whitesmoke',
    backgroundColorComponent: 'lightsteelblue',
    backgroundBtn: 'lightsteelblue',
  },
  dark: {
    id: 'dark',
    color: 'whitesmoke',
    backgroundColor: 'cadetblue',
    backgroundColorComponent: 'teal',
    backgroundBtn: 'mediumaquamarine',
  },
};

export const MyThemeContext = React.createContext<IMyThemeContextType>({
  theme: Theme.light,
  changeTheme: () => {},
});

const actionTypes = {
  THEME: 'CHANGE_THEME',
};

export const setTheme = (payload: string) => ({
  type: actionTypes.THEME,
  payload,
});

const themeReducer = (state: IThemeType, action: IAction) => {
  const { THEME } = actionTypes;

  switch (action.type) {
    case THEME: {
      return { theme: Theme[action.payload] };
    }
    default:
      return state;
  }
};

export const init = () => {
  const initialTheme = localStorage.getItem('theme');
  if (initialTheme === 'light' || null) {
    return { theme: Theme.light };
  } else {
    return { theme: Theme.dark };
  }
};

const StyledTheme = styled.div<IThemeType>`
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.backgroundColor};
  height: 100%;
`;

type Props = {
  children: React.ReactNode;
};

export const MyThemeProvider = ({ children }: Props) => {
  const initialValue = init();
  const [state, themeDispatch] = useReducer(themeReducer, initialValue);
  useEffect(() => {
    localStorage.setItem('theme', state.theme.id);
  }, [state.theme]);

  const changeTheme = (payload: 'light' | 'dark') => {
    themeDispatch({
      type: actionTypes.THEME,
      payload,
    });
  };

  const contextValue = {
    theme: state.theme,
    changeTheme: useCallback((payload: 'light' | 'dark') => changeTheme(payload), []),
  };

  return (
    <MyThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={state.theme}>
        <StyledTheme theme={state.theme}>{children}</StyledTheme>
      </ThemeProvider>
    </MyThemeContext.Provider>
  );
};
