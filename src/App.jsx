import React from "react";
import Home from "./components/Home/Home.jsx";
import 'normalize.css';
import {createCommentAction,likeCommentAction} from './actions/commentAction';
import {likeLinkActionk,createLinkAction} from './actions/linkActions';
import { useDispatch, useSelector } from "react-redux";


function App() {
  const dispatch=useDispatch();
  dispatch(createLinkAction({
        "creator":"test12newa1",
        "creatorId":100003,
        "term":"css",
        "url":"http:32//www.baidu.com",
        "tag": "test32",
        "intro":"简介32"
    }))
  return (
    <>
      <Home />
    </>
  );
}

export default App;
