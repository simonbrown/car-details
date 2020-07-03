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
                <h1 id="tabelLabel" >Weather forecast</h1>
                <p>This component demonstrates fetching data from the server.</p>
                <RegistrationInput onSubmit={this.formSubmit}></RegistrationInput>
                {contents}
            </div>
        );
    }

    async populateCarData(registration: string) {
        const response = await fetch('/api/car/' + registration);
        const data = await response.json();
        const carDetails = data[0];
        const latestMOT = carDetails['motTests'][0];

        this.setState({
            loading: false,
            car: {
                make: carDetails["make"],
                model: carDetails["model"],
                primaryColour: carDetails["primaryColour"],
                motExpiryDate: latestMOT["expiryDate"],
                odometerValue: latestMOT["odometerValue"],
                odometerUnit: latestMOT["odometerUnit"]
            }
        });
    }
}
