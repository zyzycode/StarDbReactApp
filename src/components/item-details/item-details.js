import React, { Component } from 'react';

import './item-details.css';

const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{ item[field] }</span>
        </li>
    );
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
        console.log('componentDidMount 1')
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (this.props.itemId !== prevProps.itemId) {
    //         this.updateItem();
    //     }
    // }

    componentWillUnmount() {
        console.log('componentWillUnmount componentWillUnmount componentWillUnmount componentWillUnmount')
    }

    updateItem() {
        console.log('updateItem 2')
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                console.log(item, 3, 'item')
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

        return (
            <div className="item-details card">
                <img className="item-image"
                     src={image}
                     alt="item"/>

                <div className="card-body">
                    <h4>{item.name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item });
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
