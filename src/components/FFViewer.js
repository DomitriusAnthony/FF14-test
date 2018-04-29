import React, { Component } from 'react';
import PropTypes from 'prop-types';
const api = require('../utils/api');

function SelectItem (props) {
    var items = ['All']
    
    return (
        <ul className='languages'>
            <button>Random Item</button>
        </ul>
    )
}

function ItemGrid (props) {
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
}

export default class FFViewer extends Component {
    constructor(props) {
        super();
        this.state = {
            selectedItem: 'All',
            items: null,
        }

        this.updateItem
    }

    componentDidMount() {
        this.updateItem(this.state.selectedItem);
    }

    updateItem(item) {
        this.setState(function() {
            return{
                selectedItem: item,
                items: null,
            }
        })

        api.fetchItems(item)
            .then(function(items) {
                this.setState(function() {
                    return {
                        items
                    }
                })
            }.bind(this));
    }

    render() {
        return(
            <div>
                <SelectItem
                    selectedItem={this.state.selectedItem}
                    onSelect={this.updateItem} />
                {!this.state.items
                    ? <p>LOADING!</p>
                    : <ItemGrid items={this.state.items} />}
            </div>
        )
    }
}

