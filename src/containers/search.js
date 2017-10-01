import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCars } from '../actions/cars_actions'
import { bindActionCreators } from 'redux' 

class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            keyword: ''
        }
    }

    componentDidMount = () => {}

    searchCars = event => {
        event.preventDefault()
        this.props.getCars(this.state.keyword)
    }

    handleChange = event => {
        this.setState({
            keyword: event.target.value
        })
    }

    render = () => (
        <div className="main-search">
            <form onSubmit={this.searchCars}>
                <input
                    type="text"
                    value={this.state.keyword}
                    onChange={this.handleChange}/>    
            </form>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getCars}, dispatch)
}

export default connect(null, mapDispatchToProps)(Search)