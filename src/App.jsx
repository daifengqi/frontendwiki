import React from "react";
import Home from "./components/Home/Home.jsx";
import 'normalize.css';
import {createCommentAction,likeCommentAction} from './actions/commentAction';
import { useDispatch, useSelector } from "react-redux";


function App() {
  const dispatch=useDispatch();
  console.log('t',JSON.parse(localStorage.getItem("profile")))
  dispatch(createCommentAction({
    content:"123",
    linkId:100005
  }))
  return (
    <>
      <Home />
    </>
  );
}

export default App;
