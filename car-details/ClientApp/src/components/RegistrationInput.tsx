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
        return this.state.registration.match(/\b[a-zA-Z]{2}[0-9]{2} ?[a-zA-Z]{3}\b/);
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.onSubmit(this.state.registration);
    }

    render() {
        let content;
        if (this.state.registration !== '') {
            content = this.isValid()
                ? <input type='submit' value='Submit' />
                : <span>Invalid registration</span>
        } else {
            content = <span></span>
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='registration_textbox'>Registration:</label>&nbsp;
                <input id='registration_textbox' type='text' value={this.state.registration} onChange={this.handleChange} />&nbsp;
                {content}
            </form>
        );
    }
}
