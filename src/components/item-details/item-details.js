import React, { Component } from 'react';

import './item-details.css';

const Record = ({item}) => {
    if(item.gender){
        return (
            <React.Fragment>
                <li className="list-group-item">
                    <span className="term">gender</span>
                    <span>{ item.gender }</span>
                </li>
                <li className="list-group-item">
                    <span className="term">eyeColor</span>
                    <span>{ item.eyeColor }</span>
                </li>
            </React.Fragment>
        );
    }
    if(item.rotationPeriod){
        return (
            <React.Fragment>
                <li className="list-group-item">
                    <span className="term">rotationPeriod</span>
                    <span>{ item.rotationPeriod }</span>
                </li>
                <li className="list-group-item">
                    <span className="term">population</span>
                    <span>{ item.population }</span>
                </li>
            </React.Fragment>
        );
    }
    if(item.model){
        return (
            <React.Fragment>
                <li className="list-group-item">
                    <span className="term">model</span>
                    <span>{ item.model }</span>
                </li>
                <li className="list-group-item">
                    <span className="term">length</span>
                    <span>{ item.length }</span>
                </li>
                <li className="list-group-item">
                    <span className="term">costInCredits</span>
                    <span>{ item.costInCredits }</span>
                </li>
            </React.Fragment>
        );
    }

};

export {
    Record
};

export default class ItemDetails extends Component {

    state = {
        item: null,
        image: null
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId ||
            this.props.getData !== prevProps.getData ||
            this.props.getImageUrl !== prevProps.getImageUrl) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item: item,
                    image: getImageUrl(item)
                });
            });
    }

    render() {
        const { item, image } = this.state;
        if (!item) {
            return <span>Select a item from a list</span>;
        }

        const { name } = item;

        return (
            <div className="item-details card">
                <img className="item-image"
                     src={image}
                     alt="item"/>

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <Record item={item} />
                    </ul>
                </div>
            </div>
        );
    }
}
