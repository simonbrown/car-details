import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { RegistrationInput } from './RegistrationInput';

it('should reject invalid license plates', async () => {
    render(<MemoryRouter><RegistrationInput /></MemoryRouter>);

    fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'yc089' }
    });

    expect(await screen.findByText(/Invalid registration/)).toBeInTheDocument();

    fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'yc08 jwuo' }
    });

    expect(await screen.findByText(/Invalid registration/)).toBeInTheDocument();
})

it('should accept valid license plates', async () => {
    render(<MemoryRouter><RegistrationInput /></MemoryRouter>);

    fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'yc08 jwu' }
    });

    expect(await screen.findByText(/Submit/)).toBeInTheDocument();
})