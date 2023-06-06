import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Square from '../components/Square';

describe('Square', () => {
  it('renders without crashing', () => {
    const onClick = jest.fn();
    render(<Square value="X" onClick={onClick} isWinning={false} />);
  });

  it('displays the correct value', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Square value="X" onClick={onClick} isWinning={false} />);
    expect(getByTestId('square')).toHaveTextContent('X');
  });

  it('calls the onClick function when clicked', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Square value="X" onClick={onClick} isWinning={false} />);
    fireEvent.click(getByTestId('square'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('applies the winning class when isWinning is true', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Square value="X" onClick={onClick} isWinning />);
    expect(getByTestId('square')).toHaveClass('winning');
  });
});
