import React, { Component } from 'react'
import { connect } from 'react-redux'
import { carDetail } from '../actions'
import { bindAdctionsCreators } from 'redux'

class Car extends Component {
    render() {
        return (
            <div>
                {this.props.match.params.id}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        car: state.carDetail
    }
}

function mapDispatchToProps(dispatch) {
    return bindAdctionsCreators({carDetail}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Car)