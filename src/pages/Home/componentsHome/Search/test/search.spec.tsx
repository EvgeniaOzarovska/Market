import { currentCategoryEnum, Search } from '../Search';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Search', () => {
  const onSearch = jest.fn();

  const renderSearch = () => {
    return render(<Search limit={30} currentCategory={currentCategoryEnum.smartphone} onSearch={onSearch} />);
  };

  it('should renders Search component', () => {
    renderSearch();
    expect(screen.getByTestId('search-block')).toBeInTheDocument();
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

  it('should renders error message', () => {
    renderSearch();
    fireEvent.input(screen.getByTestId('search-input'), {
      target: { value: '123456789012345678901234567890' },
    });
    expect(screen.queryByTestId('error-block')).not.toBeInTheDocument();
    fireEvent.input(screen.getByTestId('search-input'), {
      target: { value: '123456789012345678901234567890123456789012345678901234567890' },
    });
    expect(screen.getByTestId('error-block')).toBeInTheDocument();
  });
});
