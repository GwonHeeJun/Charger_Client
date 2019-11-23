import React, { Component } from "react";
import "./MyPage.scss";
import TemplateContainer from "../TemplateContainer/TemplateContainer";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";

class MyPage extends Component {
    render() {
        return (
                <TemplateContainer>
                    <ProfileHeader />
                </TemplateContainer>
        )
    }
}
export default MyPage