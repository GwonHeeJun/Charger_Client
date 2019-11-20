import React, { Component } from 'react'
import Header from '../../components/Header/Header'

class TemplateContainer extends Component {
    render() {
        return (
            <div className="template-container">
                <Header />
                {this.props.children}
            </div>
        )
    }
}

export default TemplateContainer
