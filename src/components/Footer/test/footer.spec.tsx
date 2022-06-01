import { render, screen } from '@testing-library/react';
import { Footer } from '../Footer';

describe('Footer', () => {
  it('should renders footer', () => {
    render(<Footer />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('should renders footers information', () => {
    render(<Footer />);
    expect(screen.getByTestId('footer-info')).toBeInTheDocument();
    expect(screen.getByTestId('footer-info')).not.toBeEmptyDOMElement();
    expect(screen.getByText('OUR ADRESS: Kharkiv, Sumska Street, 45')).toBeInTheDocument();
  });

  it('should renders footers text', () => {
    render(<Footer />);
    expect(screen.getByTestId('footer-text')).toBeInTheDocument();
    expect(screen.getByTestId('footer-text')).not.toBeEmptyDOMElement();
  });
});
