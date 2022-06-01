import { currentCategoryEnum, Search } from '../Search';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Search', () => {
  const onSearch = jest.fn();

  it('should renders Search component', () => {
    render(<Search currentCategory={currentCategoryEnum.smartphone} onSearch={onSearch} />);
    expect(screen.getByTestId('search-block')).toBeInTheDocument();
  });

  it('should work onChange', () => {
    render(<Search currentCategory={currentCategoryEnum.smartphone} onSearch={onSearch} />);
    fireEvent.click(screen.getByTestId('search-btn'));
    expect(onSearch).toHaveBeenCalled();
  });

  it('should work onSubmit', () => {
    render(<Search currentCategory={currentCategoryEnum.smartphone} onSearch={onSearch} />);
    fireEvent.keyDown(screen.getByTestId('search-input'), { key: 'Enter' });
    expect(onSearch).toHaveBeenCalled();
  });

  it('should renders error message', () => {
    render(
      <Search limit={30} currentCategory={currentCategoryEnum.smartphone} onSearch={onSearch} />,
    );
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
