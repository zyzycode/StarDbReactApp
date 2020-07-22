import React, {Component} from 'react';
import { BrowserRouter, Route } from "react-router-dom";

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
import StarshipDetails from "../sw-components/starship-details";

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
                    <BrowserRouter>
                        <div className="stardb-app app">

                            <Header onServiceChange={this.onServiceChange}/>
                            <RandomPlanet />

                            <Route path="/"
                                   exact={true}
                                   render={()=> <h2>Welcome</h2>} />

                            <Route path="/people/:id?" component={PeoplePage} />
                            <Route path="/planets" component={PlanetsPage} />
                            <Route path="/starship" exact={true}
                                   component={StarshipPage} />
                            <Route path="/starship/:id"
                                   render={({match, location, history})=> {
                                       const {id} = match.params;
                                       return <StarshipDetails itemId={id} />
                                   }}
                            />

                        </div>
                    </BrowserRouter>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}
