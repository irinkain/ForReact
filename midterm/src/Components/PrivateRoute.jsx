import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('accessToken');
  console.log('token', token);
  return (
    <Route
      {...rest}
      render={(props) =>
        token != null ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
