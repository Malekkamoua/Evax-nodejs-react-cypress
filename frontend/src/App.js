import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga";
//import LoginPage from "./pages/LoginPage/LoginPage";
import LoginPageFront from "./pages/frontOffice/LoginPage/LoginPage";

import ListPharmacies from "./pages/PharmacyPages/ListPharmacies/ListPharmacies";
import AddPharmacy from "./pages/PharmacyPages/AddPharmacy/AddPharmacy";
import ListCenters from "./pages/CenterPages/ListCenters/ListCenters";
import AddCenter from "./pages/CenterPages/AddCenter/AddCenter";
import ListOperators from "./pages/OperatorPages/ListOperators/ListOperators";
import AddOperator from "./pages/OperatorPages/AddOperator/AddOperator";
import ListVaccines from "./pages/VaccinePages/ListVaccines/ListVaccines";
import AddVaccine from "./pages/VaccinePages/AddVaccine/AddVaccine";

import { Provider } from "react-redux";
import store from "./redux/store";
import RegistrationPage from "./pages/frontOffice/RegistrationPage/RegistrationPage";
import ProfilePage from "./pages/frontOffice/ProfilePage/ProfilePage";
import ListVolunteers from "./pages/VolunteerPages/ListVolunteers/ListVolunteers";
import AddVolunteer from "./pages/VolunteerPages/AddVolunteer/AddVolunteer";
import HomePage from "./pages/frontOffice/HomePage/HomePage";
import OperatorDashboard from "./pages/OperatorDashboard/OperatorDashboard";

import GeneratePassword from "./pages/frontOffice/GeneratePassword/GeneratePassword";
import ListJpos from "./pages/jpoPages/ListJpos/ListJpos";
import JpoDetails from "./pages/jpoPages/ListJpos/JpoDetails";
import ListCitizen from "./pages/CitizenPages/ListCitizens/ListCitizen";
import {
  ProtectedRouteCitizen,
  ProtectedRouteAdmin,
  ProtectedRouteOperator,
} from "./ProtectedRoute";
import GenerateAppointementCenter from "./pages/AppointementPages/GenerateAppointementCenter/GenerateAppointementCenter";
import ReportAppointment from "./pages/ReportAppointmentPages/ReportAppointment";
import DashboardAdmin from "./pages/DashboardAdmin/DashboardAdmin";

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-215969311-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  let role;
  if (localStorage.getItem("user")) {
    role = JSON.parse(localStorage.getItem("user")).userInformation.role;
    console.log(role);
  }
  return (
    <div style={{ height: "auto", width: "100vw" }}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>

            <Route path="/citoyen/insription" exact>
              <RegistrationPage />
            </Route>

            <Route path="/citoyen/generate-password" exact>
              <GeneratePassword />
            </Route>

            <Route path="/citoyen/login" exact>
              <LoginPageFront />
            </Route>

            <ProtectedRouteCitizen
              exact
              path="/citoyen/profile"
              component={ProfilePage}
            />
          </Switch>
          <Switch>
            <ProtectedRouteAdmin
              exact
              path="/dashboard"
              component={DashboardAdmin}
            />
            <ProtectedRouteAdmin
              exact
              path="/dashboard/listPharmacies"
              component={ListPharmacies}
            />
            <ProtectedRouteAdmin
              exact
              path="/dashboard/addPharmacy"
              component={AddPharmacy}
            />
            <ProtectedRouteAdmin
              exact
              path="/dashboard/ListCenters"
              component={ListCenters}
            />
            <ProtectedRouteAdmin
              exact
              path="/dashboard/AddCenter"
              component={AddCenter}
            />

            <ProtectedRouteAdmin
              exact
              path="/dashboard/listOperators"
              component={ListOperators}
            />

            <ProtectedRouteAdmin
              exact
              path="/dashboard/addOperator"
              component={AddOperator}
            />

            <ProtectedRouteAdmin
              exact
              path="/dashboard/listVolunteers"
              component={ListVolunteers}
            />

            <ProtectedRouteAdmin
              exact
              path="/dashboard/addVolunteer"
              component={AddVolunteer}
            />

            <ProtectedRouteAdmin
              exact
              path="/dashboard/listVaccines"
              component={ListVaccines}
            />

            <ProtectedRouteAdmin
              exact
              path="/dashboard/addVaccine"
              component={AddVaccine}
            />
          </Switch>
          <Switch>
            <ProtectedRouteAdmin
              exact
              path="/dashboard/listJpos"
              component={ListJpos}
            />

            <ProtectedRouteAdmin
              exact
              path="/dashboard/jpoDetails"
              component={JpoDetails}
            />

            <ProtectedRouteAdmin
              exact
              path="/dashboard/listCitizens"
              component={ListCitizen}
            />

            <ProtectedRouteAdmin
              exact
              path="/dashboard/reportAppointment"
              component={ReportAppointment}
            />
            <ProtectedRouteOperator
              exact
              path="/operator/dashboard"
              component={OperatorDashboard}
            />
            <ProtectedRouteAdmin
              exact
              path="/dashboard/generateAppointement"
              component={GenerateAppointementCenter}
            />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
