import { Sidebar } from './Sidebar';
import { fireEvent, render, screen } from '@testing-library/react';
import { HardCoddedData } from '../../../../data/data';
import renderer from 'react-test-renderer';

describe('Sidebar', () => {
  const setValue = jest.fn();
  const renderSidebar = () => {
    return render(<Sidebar setValue={setValue} />);
  };

  it('should renders Sidebar', () => {
    renderSidebar();
    const categories = screen.getAllByTestId('sidebar-category');
    expect(screen.getByTestId('sidebar-block')).toBeInTheDocument();
    expect(categories.length).toBe(HardCoddedData.categories.length);
  });

  it('should renders correct Sidebar', () => {
    const view = renderer.create(<Sidebar setValue={setValue} />).toJSON();
    expect(view).toMatchSnapshot();
  });

  it('should renders Category', () => {
    renderSidebar();
    expect(screen.getAllByTestId('sidebar-category')[0]).toBeInTheDocument();
  });

  it('should call setValue function', () => {
    renderSidebar();
    fireEvent.click(screen.getAllByTestId('sidebar-category')[0]);
    expect(setValue).toHaveBeenCalled();
    expect(setValue).toHaveBeenCalledTimes(1);
  });
});
