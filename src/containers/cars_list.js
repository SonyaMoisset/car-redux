import React, { Component } from 'react'
import { connect } from 'react-redux'

class CarsList extends Component {

    cardsList = ({cars}) => {
        if (cars) {
            return cars.map((car) => {
                return (
                    <div
                        key={car.id}
                        className="car_item">
                        {car.model}
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <div>
                {this.cardsList(this.props)}
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