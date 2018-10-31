import React, { Component } from "react";
import "./Profile.css";
import MainFooter from "../../components/Footer";
import Banner from "../../components/Banner";
import SimpleSlider from "../../components/ImageSlider/ImageSlider";

import {
  Button,
  Card,
  Col,
  Input,
  Preloader,
  Row,
  Icon
} from "react-materialize";
import { Layout, Menu, Breadcrumb, Footer } from "antd";
import ReactDOM from "react-dom";
import "./Profile.css";

// import Avatar from "../../Avatar"



class Profile extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { Content, Footer, Sider } = Layout;
    const SubMenu = Menu.SubMenu;

    return (
      <div>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>DASHBOARD</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>You Viewed</span>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    <span>Wish List</span>
                  </span>
                }
              >
                <Menu.Item key="3">
                  <span className="Product_item_">
                    <a href="#" className="title">
                      Wish List
                    </a>
                  </span>
                </Menu.Item>
                {/* <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item> */}
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="team" />
                    <span>New products?</span>
                  </span>
                }
              >
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9">
                <Icon type="file" />
                <span>Any new Ideas</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: "0 16px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>The logged in Username</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: "#fff", minHeight: 1200 }}>
                search history
                <SimpleSlider />
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Profile;

// <div>
//   <div className="row clearfix">
//     <div className="col-md-12 column">
//       <Banner />
//     </div>
//     <div s={10} m={8} offset="m1" className="profilemaincotent">
//       <div>
//         <div class="market-band__header__main">
//           <span>We suggest you These top 10 products</span>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
