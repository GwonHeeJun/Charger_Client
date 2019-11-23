import React, { Component } from 'react'
import './ChargeLeft.scss';

class ChargeLeft extends Component {
    render() {
        return (
            <div className="c-charge-left">
                <div className="c-charge-left__navi">
                    <span className="c-charger-left__navi--item-active">충전</span>
                    <span className="c-charger-left__navi--item">거래기록</span>
                </div>
            </div>
        )
    }
}

export default ChargeLeft
