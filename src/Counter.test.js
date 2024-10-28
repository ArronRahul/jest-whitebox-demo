import Counter from "./Counter";

import { render, screen, fireEvent } from '@testing-library/react';


test('renders Counter component', () => {
    render(<Counter />);
    expect(screen.getByTest(/Counter: 0/i)).toBeInTheDocument();
});

test('increments count', () => {
    render(<Counter />);
    const incrementButton = screen.getByText(/Increment/i);
    fireEvent.click(incrementButton);
    expect(screen.getByText(/Counter: 1/i)).toBeInTheDocument();
});

test('decrements count', () => {
    render(<Counter />);
    const decrementButton = screen.getByText(/Decrement/i);
    fireEvent.click(decrementButton);
    expect(screen.getByText(/Counter: -1/i)).toBeInTheDocument();
});