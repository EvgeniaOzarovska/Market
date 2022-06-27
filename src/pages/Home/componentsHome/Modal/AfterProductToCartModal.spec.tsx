import { fireEvent, render, screen } from '@testing-library/react';
import { AfterProductToCartModal } from './AfterProductToCartModal';

describe('Modal', () => {
  const handleClose = jest.fn();
  const redirect = jest.fn();

  const renderCardModal = () => {
    return render(<AfterProductToCartModal isOpen onClose={handleClose} redirect={redirect} />);
  };

  it('should works close button', () => {
    renderCardModal();
    fireEvent.click(screen.getByTestId('close-btn'));
    expect(handleClose).toHaveBeenCalled();
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('should works redirect button', () => {
    renderCardModal();
    fireEvent.click(screen.getByTestId('redirect-btn'));
    expect(redirect).toHaveBeenCalled();
  });
});
