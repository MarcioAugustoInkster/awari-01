import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('should render correctly', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('the button click', () => {
    const actionButton = jest.fn();
    const { getByRole } = render(<Button action={actionButton} />);
    fireEvent.click(getByRole('button'));
    expect(actionButton).toHaveBeenCalled();
  });
});
