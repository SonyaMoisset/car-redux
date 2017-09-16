import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import './app.css'

import App from './components/app'
import Car from './components/car'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App}></Route>  
            <Route exact path="/car/:id" component={Car}></Route>  
        </div>    
    </BrowserRouter>,
    document.getElementById('root')
)
