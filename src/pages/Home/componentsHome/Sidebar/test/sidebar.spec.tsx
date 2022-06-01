import { Sidebar } from '../Sidebar';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Sidebar', () => {
  const setValue = jest.fn();

  it('should renders Sidebar', () => {
    render(<Sidebar setValue={setValue} />);
    expect(screen.getByTestId('sidebar-block')).toBeInTheDocument();
  });

  it('should renders Category', () => {
    render(<Sidebar setValue={setValue} />);
    expect(screen.getAllByTestId('sidebar-category')[0]).toBeInTheDocument();
  });

  it('should call setValue function', () => {
    render(<Sidebar setValue={setValue} />);
    fireEvent.click(screen.getAllByTestId('sidebar-category')[0]);
    expect(setValue).toHaveBeenCalled();
  });
});
