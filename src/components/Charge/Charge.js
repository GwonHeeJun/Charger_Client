import React, { Component } from 'react'
import ChargeLeft from './ChargeLeft/ChargeLeft'
import './Charge.scss'
import HasCharger from './HasCharger/HasCharger'
import MainCharge from './MainCharge/MainCharge'

class Charge extends Component {
    render() {
        return (
            <div className="c-charge">
                <ChargeLeft />
                <HasCharger />
                <MainCharge />
            </div>
        )
    }
}

export default Charge
