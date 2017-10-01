import React, { Component } from 'react'

import { Search, CarsList } from '../containers'

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Search />
                <CarsList />
            </div>
        );
    }
}
