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

    isValid() {
        return this.state.registration.match(/[a-zA-Z]{2}[0-9]{2} ?[a-zA-Z]{3}/g);
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.onSubmit(this.state.registration);
    }

    render() {
        let content = this.isValid()
            ? <input type='submit' />
            : <span>Invalid registration</span>

        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.registration} onChange={this.handleChange} />
                {content}
            </form>
        );
    }
}
