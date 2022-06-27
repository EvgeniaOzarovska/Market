import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('should renders footer', () => {
    render(<Footer />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('should renders footers text', () => {
    render(<Footer />);
    expect(screen.getByTestId('footer-text')).toBeInTheDocument();
    expect(screen.getByTestId('footer-text')).not.toBeEmptyDOMElement();
  });
});
