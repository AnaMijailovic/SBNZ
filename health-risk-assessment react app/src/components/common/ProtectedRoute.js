import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthService from '../../services/auth.service';

export const ProtectedRoute = ({
  component: Component,
  role,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (AuthService.getRole() === role) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
