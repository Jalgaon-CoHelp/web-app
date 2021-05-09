import React from "react";
import { Redirect, Route } from "react-router-dom";

interface Props {
  component: React.FC<any>;
  isAuthenticated?: boolean;
  path: string;
  exact: boolean;
}

const PrivateRoute: React.FC<Props> = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      // eslint-disable-next-line react/jsx-no-bind
      render={(props) =>
        isAuthenticated ? (
            <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
