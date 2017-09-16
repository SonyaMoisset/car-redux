import React, { Component } from 'react'

import Search from '../containers/search'
import CarsList from '../containers/cars_list'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Search />
                <CarsList />
            </div>
        );
    }
}

export default App