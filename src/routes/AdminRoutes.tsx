import React from "react";
import { Redirect, Route } from "react-router-dom";

interface Props {
  component: React.FC<any>;
  isAuthenticated?: boolean;
  isAdmin?: boolean;
  path: string;
  exact: boolean;
}

const AdminRoute: React.FC<Props> = ({
  component: Component,
  isAuthenticated,
  isAdmin,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      // eslint-disable-next-line react/jsx-no-bind
      render={(props) =>
        isAuthenticated && isAdmin ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default AdminRoute;
