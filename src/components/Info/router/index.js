/**
 * @author 季悠然
 * @date 2021-08-18
 */
import React from "react";
import {Redirect} from "react-router-dom";

import Info from "../Info.jsx";
import Login from "../../Login/Login.jsx";

import Favor from "../Favor/Favor.jsx";
import Like from "../Like/Like.jsx";
import Post from "../Post/Post.jsx";
import Comment from "../Comment/Comment.jsx";
import History from "../History/History.jsx";
import Index from "../Index.jsx";


const routes = [
    {
        path: "/",
        exact: true,
        render: () => (
            <Redirect to={"/my"}/>
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
                path: "/my",
                exact: true,
                component: Index
            },
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

