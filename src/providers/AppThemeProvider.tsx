import React, { useCallback, useReducer, useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

export interface IMyThemeContextType {
  theme: IThemeState;
  changeTheme: (payload: ThemeTypeEnum) => void;
}

export interface IThemeType {
  theme: IThemeState;
}

export interface IThemeState {
  id: string;
  color: string;
  backgroundColor: string;
  backgroundColorComponent: string;
  backgroundBtn: string;
}

export interface IAction {
  type: string;
  payload: ThemeTypeEnum;
}

export enum ThemeTypeEnum {
  light = 'light',
  dark = 'dark'
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

const init = () => {
  const initialTheme = localStorage.getItem('theme');
  if (initialTheme === ThemeTypeEnum.light || null) {
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

export interface Props {
  children: React.ReactNode;
}

export const MyThemeProvider = ({ children }: Props) => {
  const initialValue = init();
  const [state, themeDispatch] = useReducer(themeReducer, initialValue);
  useEffect(() => {
    localStorage.setItem('theme', state.theme.id);
  }, [state.theme]);

  const changeTheme = (payload: ThemeTypeEnum) => {
    themeDispatch({
      type: actionTypes.THEME,
      payload,
    });
  };

  const contextValue = {
    theme: state.theme,
    changeTheme: useCallback((payload: ThemeTypeEnum) => changeTheme(payload), []),
  };

  return (
    <MyThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={state.theme}>
        <StyledTheme theme={state.theme}>{children}</StyledTheme>
      </ThemeProvider>
    </MyThemeContext.Provider>
  );
};
