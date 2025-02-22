import React, { Component } from 'react';
import { Card } from 'reactstrap';
import { Car } from '../Car';
import { CarDetailTable } from './CarDetailTable';
import { RegistrationInput } from './RegistrationInput';

type Props = {};

type State = {
    car?: Car,
    registration: string | null,
    loading: boolean
};

export class CarDetails extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            loading: true,
            registration: null
        };

        this.formSubmit = this.formSubmit.bind(this);
    }

    formSubmit(registration: string) {
        this.setState({ registration });
        this.populateCarData(registration);
    }

    render() {
        let contents;
        if (this.state.registration) {
            contents = !this.state.car
                ? <p><em>Loading...</em></p>
                : <CarDetailTable car={this.state.car}></CarDetailTable>;
        } else {
            contents = <p></p>;
        }

        return (
            <div>
                <RegistrationInput onSubmit={this.formSubmit}></RegistrationInput>
                {contents}
            </div>
        );
    }

    async populateCarData(registration: string) {
        const registration_no_spaces = registration.replace(' ', '');
        const response = await fetch('/api/car/' + registration_no_spaces);
        const data = await response.json();
        const carDetails = data[0];
        const motTests = carDetails['motTests'];
        const latestMOT = motTests[0];

        const noMotsPassed = motTests.filter((test : any) => test['testResult'] === 'PASSED').length;

        this.setState({
            loading: false,
            car: {
                make: carDetails["make"],
                model: carDetails["model"],
                primaryColour: carDetails["primaryColour"],
                motExpiryDate: latestMOT["expiryDate"],
                odometerValue: parseInt(latestMOT["odometerValue"]),
                odometerUnit: latestMOT["odometerUnit"],
                passRate: noMotsPassed / motTests.length
            }
        });
    }
}
