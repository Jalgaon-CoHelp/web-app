import React, { lazy, Suspense } from "react";
import Layout from "../components/Layout";
import { Route, Switch } from "react-router-dom";

const Hospital = lazy(() => import("../pages/Hospital"));
const Resources = lazy(() => import("../pages/Resources"));

const Routes = () => {
  return (
    <Suspense fallback={<span>Loading ...</span>}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Hospital} />
          <Route exact path="/resources" component={Resources} />
        </Switch>
      </Layout>
    </Suspense>
  );
};

export default Routes;
