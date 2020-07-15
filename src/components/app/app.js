import React, { Component } from 'react';

import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';

import ErrorBoundry from '../error-boundry';

import {
    PlanetList,
    PersonList,
    StarshipList,
    PersonDetails,
    StarshipDetails,
    PlanetDetails
} from "../sw-components";

export default class App extends Component {

    state = {
        showRandomPlanet: true
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    render() {

        const planet =
            this.state.showRandomPlanet ? <RandomPlanet/> : null;

        return (
            <ErrorBoundry>
                <div className="stardb-app app">
                    <Header />

                    <PersonDetails itemId={11}/>
                    <PlanetDetails  itemId={11}/>
                    <StarshipDetails  itemId={11}/>

                    <PersonList/>
                    <PlanetList/>
                    <StarshipList/>
                </div>
            </ErrorBoundry>
        );
    }
}
