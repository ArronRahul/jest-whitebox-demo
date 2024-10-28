import React from 'react'; // No need to import act if not using directly
import { render, screen, fireEvent, act } from '@testing-library/react';
import Counter from './Counter';

test('renders Counter component', () => {
    render(<Counter />);
    expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();
});

test('increments count', () => {
    render(<Counter />);
    const incrementButton = screen.getByText(/Increment/i);
    
    // Wrap the click event in act
    act(() => {
        fireEvent.click(incrementButton);
    });

    expect(screen.getByText(/Counter: 1/i)).toBeInTheDocument();
});

test('decrements count', () => {
    render(<Counter />);
    const decrementButton = screen.getByText(/Decrement/i);
    
    // Wrap the click event in act
    act(() => {
        fireEvent.click(decrementButton);
    });

    expect(screen.getByText(/Counter: -1/i)).toBeInTheDocument();
});
