import React, { Component } from "react";
import TemplateContainer from "../TemplateContainer/TemplateContainer";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileDescription from "../../components/ProfileDescription/ProfileDescription";

class MyPage extends Component {
    render() {
        return (
                <TemplateContainer>
                    <ProfileHeader />
                    <ProfileDescription />
                </TemplateContainer>
        )
    }
}
export default MyPage