import React, { Component } from 'react';
const api = require('../utils/api');

function Grid (props) {
    console.log(props);
    return (
        <ul>
            {props.enemies.map(function(enemy, index) {
                return (
                    <li key={enemy.name_en}>
                        {enemy.name_en}
                    </li>
                )
            })}
        </ul>
    )
};


export default class Enemies extends Component {
    constructor(props) {
        super();

        this.state = {
            enemies: null
        
        }

        this.updateViewWithEnemies = this.updateViewWithEnemies.bind(this);
    }

    componentDidMount() {
        this.updateViewWithEnemies(this.state.enemies);
    }

    updateViewWithEnemies(props) {
        this.setState(function() {
            return {
                enemies: null
            }
        })

        api.fetchEnemies()
            .then(function(enemies) {
                this.setState(function() {
                    return {
                        enemies: enemies
                    }
                });
            }.bind(this));
    }

    render() {
        return (
            <div>
                {!this.state.enemies
                    ? <p>Loading</p>
                    : <Grid 
                        enemies={this.state.enemies}
                    />}
                
            </div>
        )
    }
}