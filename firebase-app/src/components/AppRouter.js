import React, {useContext} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {LOGIN_ROUTE, TODOLIST_ROUTE} from "../utils/Constants";
import {privateRoutes, publicRoutes} from "../app/routes";
import {Navigate, Route} from "react-router-dom";

export const AppRouter = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return user ?
        (
            <Route>
                {privateRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component}/>
                )}
                <Navigate to={TODOLIST_ROUTE}/>
            </Route>
        )
        :
        (
            <Route>
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component}/>
                )}
                <Navigate to={LOGIN_ROUTE}/>
            </Route>
        )
};