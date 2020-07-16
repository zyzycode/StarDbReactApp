import React, {Component} from "react";
import Row from "../row";
import {PersonList} from "../sw-components";
import PersonDetails from "../sw-components/person-details";

export default class PeoplePage extends Component{

    state = {
        selectedItem: null,
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }

    render() {
        const {selectedItem} = this.state

        return (
            <Row
                left={<PersonList onItemSelected={this.onItemSelected} />}
                right={<PersonDetails itemId={selectedItem}/>}
            />
        )
    }

}