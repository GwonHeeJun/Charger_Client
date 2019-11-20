import React, { Component } from 'react'
import "./RepresentContainer.scss";
import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';

class RepresentContainer extends Component {
    render() {
        return (
            <div className="represent-container">
                <Header />
                <SubHeader />
            </div>
        )
    }
}

export default RepresentContainer
