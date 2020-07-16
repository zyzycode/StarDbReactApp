import React, {Component} from 'react';

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from "../../services/swapi-service";

import {SwapiServiceProvider} from "../swapi-service-context";

import DummySwapiService from "../../services/dummy-swapi-service";
import PeoplePage from "../pages/people-page";
import PlanetsPage from "../pages/planets-page";
import StarshipPage from "../pages/starship-page";

export default class App extends Component {

    state = {
        swapiService: new SwapiService(),
    };

    onServiceChange = () => {
        this.setState(({swapiService})=>{
            const Service = swapiService instanceof SwapiService ?
                DummySwapiService : SwapiService
            return {
                swapiService: new Service()
            }
        })
    }

    render() {

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div className="stardb-app app">

                        <Header onServiceChange={this.onServiceChange}/>

                        <RandomPlanet />

                        <PeoplePage />

                        <PlanetsPage />

                        <StarshipPage />

                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}
