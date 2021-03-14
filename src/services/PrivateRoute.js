import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from './Auth'

export default function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth();

    console.log({ currentUser });
    return (
        <Route
            {...rest}
            render={props => {
                return { currentUser } ? <Component {...props} /> : <Redirect to="/signin" />
            }}
        />
    )
}
