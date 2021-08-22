import React from "react";
import Home from "./components/Home/Home.jsx";
import 'normalize.css';
import {createCommentAction,likeCommentAction} from './actions/commentAction';
import {likeLinkActionk} from './actions/linkActions';
import { useDispatch, useSelector } from "react-redux";


function App() {
  const dispatch=useDispatch();
  dispatch(likeLinkActionk(1))
  return (
    <>
      <Home />
    </>
  );
}

export default App;
