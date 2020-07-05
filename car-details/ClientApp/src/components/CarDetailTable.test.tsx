import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { CarDetailTable } from './CarDetailTable';

it('should show car details', async () => {
    const car: Car = {
        make: 'Ford',
        model: 'Fiesta',
        primaryColour: 'Orange',
        motExpiryDate: '2017.02.03',
        odometerValue: 8000,
        odometerUnit: 'mi'
    };

    render(<MemoryRouter><CarDetailTable car={car} /></MemoryRouter>);

    expect(await screen.findByText(/Ford/)).toBeInTheDocument();
    expect(await screen.findByText(/Fiesta/)).toBeInTheDocument();
    expect(await screen.findByText(/Orange/)).toBeInTheDocument();
    expect(await screen.findByText(/2017.02.03/)).toBeInTheDocument();
    expect(await screen.findByText(/8000 mi/)).toBeInTheDocument();
})