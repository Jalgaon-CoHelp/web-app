import React, { lazy, Suspense } from "react";
import Layout from "../components/Layout";
import { Route, Switch } from "react-router-dom";
import PublicRoute from "./PublicRoutes";
import PrivateRoute from "./PrivateRoutes";
import { AppState } from "../redux/store";
import { useSelector } from "react-redux";
import { UserState } from "../redux/user/types";
import { Spinner } from "react-bootstrap";
import { Colors } from "../utils/colors";
import UserRequestedResources from "../pages/UserRequestedResources";
import UserSuppliedResources from "../pages/UserSuppliedResources";

const Hospital = lazy(() => import("../pages/Hospital"));
const Supplier = lazy(() => import("../pages/Supplier"));
const Request = lazy(() => import("../pages/Request"));
const Volunteer = lazy(() => import("../pages/Volunteer"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const SuggestAuth = lazy(
  () => import("../components/suggest-auth/suggest-auth.component")
);

const Routes = () => {
  const { isAuthenticated }: UserState = useSelector(
    (state: AppState) => state.user
  );
  return (
    <Suspense
      fallback={
        <div className="full-screen-page-loader-wrapper">
          <Spinner animation="border" style={{ color: Colors.primaryColor }} />
        </div>
      }
    >
      <Layout>
        <Switch>
          <Route exact path="/" component={Hospital} />
          <Route
            exact
            path="/requested-resources"
            component={UserRequestedResources}
          />
          <Route
            exact
            path="/supplied-resources"
            component={UserSuppliedResources}
          />
          <Route exact path="/add-resources" component={Supplier} />
          <Route exact path="/request-resources" component={Request} />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <PublicRoute
            exact
            path="/login"
            component={Login}
            isAuthenticated={isAuthenticated}
          />
          <PublicRoute
            exact
            path="/register"
            component={Register}
            isAuthenticated={isAuthenticated}
          />
          <PrivateRoute
            exact
            path="/volunteer"
            component={Volunteer}
            isAuthenticated={isAuthenticated}
          />
        </Switch>
        {!isAuthenticated && <SuggestAuth />}
      </Layout>
    </Suspense>
  );
};

export default Routes;
