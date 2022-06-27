import { useContext, useEffect } from 'react';
import { Router } from 'react-router-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Routes } from '../../router';
import { Header } from './Header';
import {
  MyThemeContext,
  MyThemeProvider,
  ThemeTypeEnum,
} from '../../providers/AppThemeProvider';

describe('Header', () => {
  const history = createMemoryHistory();
  const renderHeader = () => {
    return (
      render(
      <Router history={history}>
        <Header />
      </Router>
    ));
  };

  it('should renders header', () => {
    renderHeader();
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('should renders logo text', () => {
    renderHeader();
    expect(screen.getByTestId('logo-text')).toBeInTheDocument();
  });

  it('should renders change theme button', () => {
    renderHeader();
    expect(screen.getByTestId('theme-button')).toBeInTheDocument();
  });

  describe('Change theme button', () => {
    let currentTheme: any;
    const MySpyComponent = () => {
      const { theme } = useContext(MyThemeContext);
      useEffect(() => {
        currentTheme = theme;
      }, [theme]);
      return null;
    };

    const headerWithTheme = () => {
      return (
        render(
        <Router history={history}>
          <MyThemeProvider>
            <Header />
            <MySpyComponent />
          </MyThemeProvider>
        </Router>
      ));
    };

    afterEach(() => {
      currentTheme = undefined;
    });

    it('should change application theme when initial value is valid', async () => {
      localStorage.setItem('theme', ThemeTypeEnum.light);
      headerWithTheme();
      expect(currentTheme?.id).toBe(ThemeTypeEnum.light);
      const themeBtn = screen.getByTestId('theme-button');
      fireEvent.click(themeBtn);
      await waitFor(() => expect(currentTheme?.id).toBe(ThemeTypeEnum.dark));
      fireEvent.click(themeBtn);
      await waitFor(() => expect(currentTheme?.id).toBe(ThemeTypeEnum.light));
    });

    it('should change application theme when initial value is invalid', async () => {
      localStorage.setItem('theme', 'random test value');
      headerWithTheme();
      expect(currentTheme?.id).toBe(ThemeTypeEnum.light);
      const themeBtn = screen.getByTestId('theme-button');
      fireEvent.click(themeBtn);
      await waitFor(() => expect(currentTheme?.id).toBe(ThemeTypeEnum.dark));
      fireEvent.click(themeBtn);
      await waitFor(() => expect(currentTheme?.id).toBe(ThemeTypeEnum.light));
    });
  });

  describe('Links', () => {
    it('should renders link sign in', () => {
      renderHeader();
      expect(screen.getByTestId('sign-in')).toBeInTheDocument();
    });

    it('should renders link sign up', () => {
      renderHeader();
      expect(screen.getByTestId('sign-up')).toBeInTheDocument();
    });

    describe('Redirect', () => {
      it('should redirect from sign in to Page not found', () => {
        renderHeader();
        const signIn = screen.getByTestId('sign-in');
        fireEvent.click(signIn);
        expect(history.location.pathname).toBe(Routes.Auth.Login);
      });

      it('should redirect from sign up to Page not found', () => {
        renderHeader();
        const signIn = screen.getByTestId('sign-up');
        fireEvent.click(signIn);
        expect(history.location.pathname).toBe(Routes.Auth.Reg);
      });
    });
  });

  describe('Shopping cart icon', () => {
    it('should renders shopping cart icon', () => {
      renderHeader();
      expect(screen.getByTestId('shop-icon')).toBeInTheDocument();
    });
  });
});
