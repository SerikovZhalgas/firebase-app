import {LOGIN_ROUTE, TODOLIST_ROUTE} from "../utils/Constants";
import {Login} from "../components/Login";
import {Todolist} from "./Todolist";


export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]

export const privateRoutes = [
    {
        path: TODOLIST_ROUTE,
        Component: Todolist
    }
]