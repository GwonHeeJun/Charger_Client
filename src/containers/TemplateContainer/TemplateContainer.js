import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

class TemplateContainer extends Component {
    render() {
        return (
            <div className="template-container">
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default TemplateContainer
