import { fireEvent, render } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('should render', () => {
    const button = render(<Button />);
    expect(button).toBeTruthy();
  });

  it('should show Login text', () => {
    const { getByText } = render(<Button />);
    expect(getByText('Fazer login')).toBeInTheDocument();
  });

  it('must be a button', () => {
    const { getByRole } = render(<Button />);
    expect(getByRole('button')).toBeTruthy();
  });

  test('the button click', () => {
    const actionButton = jest.fn();
    const { getByRole } = render(<Button action={actionButton} />);
    fireEvent.click(getByRole('button'));
    expect(actionButton).toHaveBeenCalled();
  });
});
