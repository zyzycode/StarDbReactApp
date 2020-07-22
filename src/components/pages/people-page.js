import React, {Component} from "react";
import Row from "../row";
import {PersonList} from "../sw-components";
import PersonDetails from "../sw-components/person-details";
import { withRouter } from 'react-router-dom'

// export default class PeoplePage extends Component{
//
//     state = {
//         selectedItem: null,
//     }
//
//     onItemSelected = (id) => {
//         this.setState({
//             selectedItem: id
//         })
//     }
//
//     render() {
//         const {selectedItem} = this.state
//
//         return (
//             <Row
//                 left={<PersonList onItemSelected={this.onItemSelected} />}
//                 right={<PersonDetails itemId={selectedItem}/>}
//             />
//         )
//     }
//
// }

const PeoplePage = ({history, match}) => {

    const { id } = match.params

    return (
        <Row
            left={<PersonList onItemSelected={(id)=> history.push(id)}/>}
            right={<PersonDetails itemId={id}/>}
        />
    )
}

export default withRouter(PeoplePage)