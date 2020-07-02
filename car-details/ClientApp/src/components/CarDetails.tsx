import React, { Component } from 'react';
import { Card } from 'reactstrap';

type Car = {
    make?: string;
    model?: string;
    primaryColour?: string;
    motExpiryDate?: Date;
    odometerValue?: number;
    odometerUnit?: string;
};

type Props = {};

type State = {
    car?: Car,
    registration: string,
    loading: boolean
};

export class CarDetails extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            loading: true,
            registration: ''
        };
    }

    componentDidMount() {
        this.populateCarData();
    }

    static renderCarTable(car: Car) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Colour</th>
                        <th>MOT Expiry</th>
                        <th>Odometer Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{car.make}</td>
                        <td>{car.model}</td>
                        <td>{car.primaryColour}</td>
                        <td>{car.motExpiryDate}</td>
                        <td>{car.odometerValue} {car.odometerUnit}</td>
                    </tr>
                </tbody>
            </table>
        );
    }

    render() {
        let contents = !this.state.car
            ? <p><em>Loading...</em></p>
            : CarDetails.renderCarTable(this.state.car);

        return (
            <div>
                <h1 id="tabelLabel" >Weather forecast</h1>
                <p>This component demonstrates fetching data from the server.</p>
                <div>
                    <input type='text' value={this.state.registration} onChange={this.handleChange} />
                    <input type='submit' />
                </div>
                {contents}
            </div>
        );
    }

    handleChange(event) {
        this.setState({
            registration: this.target.value
        });
    }

    async populateCarData() {
        const response = await fetch('/api/car/YC08JWU');
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
