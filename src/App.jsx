import React from "react";
import Home from "./components/Home/Home.jsx";
import 'normalize.css';
import {getCommentListAction} from './actions/commentAction';
import { useDispatch } from "react-redux";


function App() {
  const dispatch=useDispatch();
  dispatch(getCommentListAction(100006))
  return (
    <>
      <Home />
    </>
  );
}

export default App;
