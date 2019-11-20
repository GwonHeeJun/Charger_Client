import React, { Component } from 'react'
import "./RepresentContainer.scss";
import SubHeader from '../../components/SubHeader/SubHeader';
import TemplateContainer from '../TemplateContainer/TemplateContainer';

class RepresentContainer extends Component {
    render() {
        return (
            <div className="represent-container">
                <TemplateContainer>
                    <SubHeader />
                </TemplateContainer>
            </div>
        )
    }
}

export default RepresentContainer
