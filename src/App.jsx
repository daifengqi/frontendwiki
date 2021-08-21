import React from "react";
import Home from "./components/Home/Home.jsx";
import {getLinkList} from './actions/linkActions';
import 'normalize.css'
import { useDispatch } from "react-redux";

function App() {
  const dispatch=useDispatch()
  dispatch(getLinkList(1))
  dispatch(getLinkList(2))
  dispatch(getLinkList(3))
  return (
    <>
      <Home />
    </>
  );
}

export default App;
