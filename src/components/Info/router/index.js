/**
 * @author 季悠然
 * @date 2021-08-18
 */

import Info from "../Info.jsx";
import Login from "../../Login/Login.jsx";

const routes = [
    {
        path: "/",
        exact: true,
        component: Info
    },
    {
        path: "/login",
        component: Login
    }
];

export default routes;

