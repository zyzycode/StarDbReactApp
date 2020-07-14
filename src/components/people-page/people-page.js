import React, {Component} from 'react';

import './people-page.css';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";


export default class PeoplePage extends Component{

    swapiService = new SwapiService();

    state = {
        selectedPerson: null,
        hasErrors: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasErrors: true
        })
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {

        if(this.state.hasError){
            return <ErrorIndicator />
        }
        
        return (
            <div className="row mb2 mt-2">
                <div className="col-md-6">
                    <ItemList
                        getData={this.swapiService.getAllPeople}
                        onItemSelected={this.onPersonSelected}
                        renderItem={(item)=>`${item.name}, (${item.gender})`}
                    />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>
            </div>
        )
    }

}
