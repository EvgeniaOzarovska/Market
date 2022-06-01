import { Home } from '../Home';
import { fireEvent, render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { MyThemeProvider } from '../../../providers/AppThemeProvider';
import { createMemoryHistory } from 'history';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    category: 'smartphone',
  }),
  useRouteMatch: () => ({ url: '/category/smartphone', params: { category: 'smartphone' } }),
}));

describe('Home', () => {
  const route = '/category/smartphone';
  const history = createMemoryHistory({ initialEntries: [route] });
  const renderHome = () => {
    return (
      <Router history={history}>
        <MyThemeProvider>
          <Home />
        </MyThemeProvider>
      </Router>
    );
  };

  it('should renders Home page', () => {
    render(renderHome());
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  it('should renders product block', () => {
    render(renderHome());
    expect(screen.getByTestId('product-block')).toBeInTheDocument();
  });

  it('should change category', () => {
    render(renderHome());
    const categories = screen.getAllByTestId('sidebar-category');
    fireEvent.click(categories[0]);
    expect(categories[0]).toBeInTheDocument();
  });

  it('should renders error message', () => {
    render(renderHome());
    fireEvent.input(screen.getByTestId('search-input'), { target: { value: 'test' } });
    fireEvent.click(screen.getByTestId('search-btn'));
    expect(screen.getByTestId('error-msg')).toBeInTheDocument();
  });
});
