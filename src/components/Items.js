import React, { Component } from 'react';
const api = require('../utils/api');

function Grid (props) {
    console.log(props);
    return (
        <ul>
            {props.items.map(function(item, index) {
                return (
                    <li key={item.name_en}>
                        {item.name_en}
                    </li>
                )
            })}
        </ul>
    )
};


export default class Items extends Component {
    constructor(props) {
        super();

        this.state = {
            items: null
        
        }

        this.updateViewWithItems = this.updateViewWithItems.bind(this);
    }

    componentDidMount() {
        this.updateViewWithItems(this.state.items);
    }

    updateViewWithItems(props) {
        this.setState(function() {
            return {
                items: null
            }
        })

        api.fetchItems()
            .then(function(items) {
                this.setState(function() {
                    return {
                        items: items
                    }
                });
            }.bind(this));
    }

    render() {
        console.log(this.state.items);
        return (
            <div>
                {!this.state.items
                    ? <p>Loading</p>
                    : <Grid 
                        items={this.state.items}
                    />}
                
            </div>
        )
    }
}