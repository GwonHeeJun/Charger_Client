import React, { Component } from 'react'
import "./MyWallet.scss";

class MyWallet extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="c-mywallet">
                <div className="c-mywallet__wrapper">
                    <h2 className="c-mywallet__wrapper--subtitle">
                        거래 내역
                    </h2>
                </div>
            </div>
        )
    }
}

export default MyWallet