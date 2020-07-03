import React, { Component } from 'react';
import { Card } from 'reactstrap';

type Props = {
    onSubmit: Function
};

type State = {
    registration: string
};

export class RegistrationInput extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            registration: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({
            registration: event.currentTarget.value
        });
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.onSubmit(this.state.registration);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.registration} onChange={this.handleChange} />
                <input type='submit' />
            </form>
        );
    }
}
