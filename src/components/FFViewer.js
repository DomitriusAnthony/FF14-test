import React, { Component } from 'react';
import PropTypes from 'prop-types';
var api = require('../utils/api.js');

function SelectItem (props) {
    var items = ['All', 'Item', 'Item2', 'Item3'];
    
    return (
        <ul className='languages'>
            {items.map(function (item) {
                return (
                    <li
                        style={item === props.selectedItem ? {color: '#d0021b'} : null}
                        onClick={props.onSelect.bind(null, item)}
                        key={item}>
                        {item}
                    </li>
                )
            })}
        </ul>
    )
}

function ItemGrid (props) {
    return (
        <ul>
            {props.items.map(function(item, index) {
                return (
                    <li key={item.name}>
                    </li>
                )
            })}
        </ul>
    )
}

class FFViewer extends Component {
    constructor(props) {
        super();
        this.state = {
            selectedItem: 'All',
            items: null,
        }
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

        api.fetchRandomItem(item)
            .then(function(items) {
                this.setState(function() {
                    return {
                        items
                    }
                });
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

export default FFViewer;