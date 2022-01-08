import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";

import "./style.css";
import React, { useState } from "react";

const { Header, Sider, Content } = Layout;
export default function DashboardNavbarOperator(props) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: "100vh", height: "auto" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ padding: 0 }}
      >
        <div className="logo">
          {!collapsed ? <p>Operator Dashboard</p> : ""}
        </div>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background-header">
          {collapsed ? (
            <MenuUnfoldOutlined
              className="trigger"
              onClick={() => setCollapsed(!collapsed)}
            />
          ) : (
            <MenuFoldOutlined
              className="trigger"
              onClick={() => setCollapsed(!collapsed)}
            />
          )}
        </Header>
        <Content
          className="site-layout-background-content"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}
