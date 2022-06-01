import { fireEvent, render, screen } from '@testing-library/react';
import { AfterProductToCartModal } from '../AfterProductToCartModal';

describe('Modal', () => {
  const handleClose = jest.fn();
  const redirect = jest.fn();

  it('should works close button', () => {
    render(<AfterProductToCartModal isOpen onClose={handleClose} redirect={redirect} />);
    fireEvent.click(screen.getByTestId('close-btn'));
    expect(handleClose).toHaveBeenCalled();
  });

  it('should works redirect button', () => {
    render(<AfterProductToCartModal isOpen onClose={handleClose} redirect={redirect} />);
    fireEvent.click(screen.getByTestId('redirect-btn'));
    expect(redirect).toHaveBeenCalled();
  });
});
