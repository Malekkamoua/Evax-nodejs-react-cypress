import {
  BankOutlined,
  FileOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

import "./style.css";
import React, { useState } from "react";
import SubMenu from "antd/lib/menu/SubMenu";
import { Link } from "react-router-dom";
const { Header, Sider, Content } = Layout;
export default function DashboardNav(props) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: "100vh", height: "auto" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ padding: 0 }}
      >
        <div className="logo">{!collapsed ? <p>Admin Dashboard</p> : ""}</div>
        {/* you need to give a key to every Menu.Item then use the defaultSelectedKeys to render it */}
        {/* every SubMenu have a title and a key */}
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <SubMenu key="sub1" icon={<BankOutlined />} title="Pharmacies">
            <Menu.Item key="3">
              <Link to="/dashboard/addPharmacy">
                <p>ADD Pharmacy</p>
              </Link>
            </Menu.Item>

            <Menu.Item key="4">
              <Link to="/dashboard/listPharmacies">
                <p>LIST of Pharmacy</p>
              </Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu key="sub2" icon={<BankOutlined />} title="Center">
            <Menu.Item key="6">
              <Link to="/dashboard/addCenter">
                <p>Add Center</p>
              </Link>
            </Menu.Item>

            <Menu.Item key="7">
              <Link to="/dashboard/listCenters">
                <p>List of Centers</p>
              </Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu key="sub3" icon={<TeamOutlined />} title="Operator">
            <Menu.Item key="8">
              <Link to="/dashboard/addOperator">
                <p>ADD Operator</p>
              </Link>
            </Menu.Item>

            <Menu.Item key="9">
              <Link to="/dashboard/listOperators">
                <p>LIST of Operator</p>
              </Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu key="sub4" icon={<TeamOutlined />} title="Volunteer">
            <Menu.Item key="10">
              <Link to="/dashboard/addVolunteer">
                <p>ADD Volunteer</p>
              </Link>
            </Menu.Item>
            <Menu.Item key="11">
              <Link to="/dashboard/listVolunteers">
                <p>LIST Volunteer</p>
              </Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu key="sub5" icon={<TeamOutlined />} title="Vaccine">
            <Menu.Item key="12">
              <Link to="/dashboard/addVaccine">
                <p>ADD Vaccine</p>
              </Link>
            </Menu.Item>

            <Menu.Item key="13">
              <Link to="/dashboard/listVaccines">
                <p>LIST Vaccines</p>
              </Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu key="sub6" icon={<TeamOutlined />} title="Jpo">
            <Menu.Item key="12">
              <Link to="/dashboard/listJpos">
                <p>LIST Jpos</p>
              </Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub7" icon={<TeamOutlined />} title="Citizen">
            <Menu.Item key="13">
              <Link to="/dashboard/listCitizens">
                <p>LIST Citizens</p>
              </Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub7"
            icon={<TeamOutlined />}
            title="Generate Appointement"
          >
            <Menu.Item key="14">
              <Link to="/dashboard/generateAppointement">
                <p>Generate Appointement</p>
              </Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu key="sub19" icon={<TeamOutlined />} title="Report">
            <Menu.Item key="19">
              <Link to="/dashboard/reportAppointment">
                <p>Report Appointment</p>
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
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
