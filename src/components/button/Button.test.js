import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('should render', () => {
    render(<Button />);
  });

  it('has className', () => {
    render(<Button />);
    expect(screen.getByTestId('btnModuleRedirect')).toHaveClass('simple-button');
  });

  it('trigger on button click', () => {
    const triggered = jest.fn();
    const { getByTestId } = render(<Button action={triggered} />);
    fireEvent.click(getByTestId('btnModuleRedirect'));
    expect(triggered).toHaveBeenCalled();
  });
});
