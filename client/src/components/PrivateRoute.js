import React from "react"
import { Route, Navigate } from "react-router-dom";
import { AUTH } from "../constants/actionTypes";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = AUTH()

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Navigate to="/" />
      }}
    ></Route>
  )
}