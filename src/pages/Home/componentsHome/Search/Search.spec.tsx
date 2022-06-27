import { currentCategoryEnum, Search } from './Search';
import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { ItemCard } from '../ItemCard';
import React from 'react';

describe('Search', () => {
  const onSearch = jest.fn();

  const renderSearch = () => {
    return render(
      <Search limit={30} currentCategory={currentCategoryEnum.smartphone} onSearch={onSearch} />,
    );
  };

  it('should renders Search component', () => {
    renderSearch();
    expect(screen.getByTestId('search-block')).toBeInTheDocument();
  });

  it('Should renders correct Search', () => {
    const view = renderer.create(<Search limit={30} currentCategory={currentCategoryEnum.smartphone} onSearch={onSearch} />).toJSON();
    expect(view).toMatchSnapshot();
  });

  it('should work onChange', () => {
    renderSearch();
    fireEvent.click(screen.getByTestId('search-btn'));
    expect(onSearch).toHaveBeenCalled();
  });

  it('should work onSubmit', () => {
    renderSearch();
    fireEvent.keyDown(screen.getByTestId('search-input'), { key: 'Enter' });
    expect(onSearch).toHaveBeenCalled();
  });

  it('should not renders error message', () => {
    renderSearch();
    fireEvent.input(screen.getByTestId('search-input'), {
      target: { value: '123456789012345678901234567890' },
    });
    expect(screen.queryByTestId('error-block')).not.toBeInTheDocument();
  });

  it('should renders error message', () => {
    renderSearch();
    fireEvent.input(screen.getByTestId('search-input'), {
      target: { value: '123456789012345678901234567890123456789012345678901234567890' },
    });
    expect(screen.getByTestId('error-block')).toBeInTheDocument();
  });
});
