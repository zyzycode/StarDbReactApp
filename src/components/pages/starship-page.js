import React, {Component} from "react";
import {StarshipList} from "../sw-components";
import { withRouter } from 'react-router-dom'
// import Row from "../row";
// import StarshipDetails from "../sw-components/starship-details";

// export default class StarshipPage extends Component{
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
//                 left={
//                     <StarshipList onItemSelected={this.onItemSelected}
//                     />}
//                 right={
//                     <StarshipDetails itemId={selectedItem}
//                     />}
//             />
//         )
//     }
//
// }

const StarshipPage = ({ history }) => {
    return (
        <StarshipList
            onItemSelected={(itemId) => {
                history.push(`${itemId}`)
            }}
        />
    )
}

export default withRouter(StarshipPage)