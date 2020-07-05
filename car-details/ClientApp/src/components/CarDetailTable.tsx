import React, { Component } from 'react';
import { Card } from 'reactstrap';
import { Car } from '../Car';

type Props = {
    car: Car
};

type State = {};

export class CarDetailTable extends Component<Props, State> {
    render() {
        const passRateText = this.props.car.passRate
            ? (this.props.car.passRate * 100).toFixed(2) + '%'
            : ''

        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Colour</th>
                        <th>MOT Expiry</th>
                        <th>Odometer Value</th>
                        <th>MOT Pass Rate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.car.make}</td>
                        <td>{this.props.car.model}</td>
                        <td>{this.props.car.primaryColour}</td>
                        <td>{this.props.car.motExpiryDate}</td>
                        <td>{this.props.car.odometerValue?.toLocaleString()} {this.props.car.odometerUnit}</td>
                        <td>{passRateText}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}
