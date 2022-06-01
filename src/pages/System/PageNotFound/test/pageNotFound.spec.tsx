import { PageNotFound } from '../PageNotFound';
import { createMemoryHistory } from 'history';
import { fireEvent, render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { MyThemeProvider } from '../../../../providers/AppThemeProvider';
import { Routes } from '../../../../router';

describe('PageNotFound', () => {
  const history = createMemoryHistory();
  const renderPageNotFound = () => {
    return(
      <Router history={history}>
        <MyThemeProvider>
          <PageNotFound />
        </MyThemeProvider>
      </Router>
    );
  };

  it('should renders page not found', () => {
    render(renderPageNotFound());
    expect(screen.getByTestId('page-not-found')).toBeInTheDocument();
  });

  it('should renders message', () => {
    render(renderPageNotFound());
    expect(screen.getByText('PAGE NOT FOUND')).toBeInTheDocument();
  });

  it('should redirect on home page', () => {
    render(renderPageNotFound());
    const redirectLink = screen.getByTestId('page-not-found-text');
    fireEvent.click(redirectLink);
    expect(history.location.pathname).toBe(Routes.Auth.DefaultHome);
  });
});
