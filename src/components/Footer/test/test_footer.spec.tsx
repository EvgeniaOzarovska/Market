import { render, screen } from '@testing-library/react';
import { Footer } from '../Footer';

describe('Footer', () => {
  it('should footer renders', () => {
    render(<Footer />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
  it('should footers information renders', () => {
    render( <Footer />);
    expect(screen.getByTestId('footer-info')).toBeInTheDocument();
    expect(screen.getByTestId('footer-info')).not.toBeNull();
  });
  it('should footers text renders', () => {
    render( <Footer />);
    expect(screen.getByTestId('footer-text')).toBeInTheDocument();
    expect(screen.getByTestId('footer-text')).not.toBeNull();

  });
});
