/**
 * @author 季悠然
 * @date 2021-08-18
 */
import React from "react";
import {Redirect} from "react-router-dom";

import Info from "../Info.jsx";
import Login from "../../Login/Login.jsx";

import Favor from "../Pages/Favor/Favor.jsx";
import Like from "../Pages/Like/Like.jsx";
import Post from "../Pages/Post/Post.jsx";
import Comment from "../Pages/Comment/Comment.jsx";
import History from "../Pages/History/History.jsx";


const routes = [
    {
        path: "/",
        exact: true,
        render: () => (
            <Redirect to={"/my/post"}/>
        )
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/my",
        component: Info,
        routes: [
            {
                path: "/my/favorite",
                component: Favor
            },
            {
                path: "/my/post",
                component: Post
            },
            {
                path: "/my/like",
                component: Like
            },
            {
                path: "/my/comment",
                component: Comment
            },
            {
                path: "/my/history",
                component: History
            }
        ]
    }
];

export default routes;

