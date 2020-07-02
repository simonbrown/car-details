import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout.tsx';
import { Home } from './components/Home.tsx';
import { FetchData } from './components/FetchData.tsx';
import { Counter } from './components/Counter.tsx';

import './custom.css'
import { CarDetails } from './components/CarDetails';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/car-details' component={CarDetails} />
      </Layout>
    );
  }
}
