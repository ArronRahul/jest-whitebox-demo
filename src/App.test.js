import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Simple Counter App header', () => {
    render(<App />);
    const headerElement = screen.getByText(/simple counter app/i);
    expect(headerElement).toBeInTheDocument();
});

test('renders Counter component', () => {
    render(<App />);
    const counterElement = screen.getByText(/counter:/i); // Update here
    expect(counterElement).toBeInTheDocument();
});
