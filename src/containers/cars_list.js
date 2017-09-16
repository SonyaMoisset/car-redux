import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class CarsList extends Component {

    cardsList = ({list}) => {
        if (list) {
            return list.map((car) => {
                return (
                    <Link
                        to={`/car/${car.id}`}  
                        key={car.id}
                        className="car-item">
                        <div className="left">
                            <img
                                src={`/images/${car.image}`}
                                alt={car.model}/>    
                        </div>
                        <div className="right">
                            <h4>{car.model}</h4>
                            <h6>{car.brand}</h6>
                        </div>
                    </Link>
                )
            })
        }
    }

    render = () => {
        return (
            <div>
                {this.cardsList(this.props.cars)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps, null)(CarsList)