import React, { Component } from "react";
import TemplateContainer from "../TemplateContainer/TemplateContainer";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileDescription from "../../components/ProfileDescription/ProfileDescription";
import MyWallet from "../../components/MyWallet/MyWallet";

class MyPage extends Component {
    render() {
        return (
                <TemplateContainer>
                    <ProfileHeader />
                    <ProfileDescription />
                    <MyWallet />
                </TemplateContainer>
        )
    }
}
export default MyPage