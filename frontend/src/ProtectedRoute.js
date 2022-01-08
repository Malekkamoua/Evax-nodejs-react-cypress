import React from "react";
import { Route, Redirect } from "react-router-dom";
import Dashboard from "./components/DashboardNav/DashboardNav";

export const ProtectedRouteCitizen = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (
          localStorage.getItem("user") &&
          JSON.parse(localStorage.getItem("user")).userInformation.role ===
            "citizen"
        ) {
          console.log(
            JSON.parse(localStorage.getItem("user")).userInformation.role
          );
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/citoyen/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export const ProtectedRouteAdmin = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (
          localStorage.getItem("user") &&
          JSON.parse(localStorage.getItem("user")).userInformation.role ===
            "admin"
        ) {
          return (
            <Dashboard>
              {" "}
              <Component {...props} />{" "}
            </Dashboard>
          );
        } else {
          return (
            <Redirect
              to={{
                pathname: "/citoyen/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export const ProtectedRouteOperator = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (
          localStorage.getItem("user") &&
          JSON.parse(localStorage.getItem("user")).userInformation.role ===
            "operator"
        ) {
          return (
            <Dashboard>
              <Component {...props} />
            </Dashboard>
          );
        } else {
          return (
            <Redirect
              to={{
                pathname: "/citoyen/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
