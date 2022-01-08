import React from "react";
import { Layout, Breadcrumb } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Content, Header } from "antd/lib/layout/layout";
export default function LoginNav(props) {
  return (
    <Layout className="layout" style={{ backgroundColor: "white" }}>
      <Header
        style={{ color: "white", fontSize: 25, backgroundColor: "#0096FF" }}
      >
        <UserOutlined style={{ marginRight: "2vw" }} />
        Administrator Login Page
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
        {props.children}
      </Content>
    </Layout>
  );
}
