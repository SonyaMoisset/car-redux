import React, { Component } from 'react'
import { connect } from 'react-redux'
import { carDetail, clearDetail } from '../actions/cars_actions'
import { bindActionCreators } from 'redux'

class Car extends Component {

    componentWillMount = () => {
        this.props.carDetail(this.props.match.params.id)
    }

    componentWillUnmount = () => {
        this.props.clearDetail()
    }

    renderDetail = ({detail}) => {
        if (detail) {
            return detail.map(car => {
                return (
                    <div
                        key={car.id}
                        className="car-detail">
                        <img
                            src={`/images/${car.image}`}
                            alt={car.model} />
                        <div className="content">
                            <h2>{car.model}</h2>    
                            <h4>{car.brand}</h4>
                            <p>{car.description}</p>
                        </div>
                    </div>
                )
            })
        }
    }

    render = () => (
        <div>
            {this.renderDetail(this.props.cars)}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        cars: state.cars
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ carDetail, clearDetail }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Car)