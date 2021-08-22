import React from "react";
import Home from "./components/Home/Home.jsx";
import 'normalize.css';
import {getLinkListAction} from './actions/linkActions';
import { useDispatch } from "react-redux";


function App() {
  const dispatch=useDispatch();
  dispatch(getLinkListAction('css'))
  return (
    <>
      <Home />
    </>
  );
}

export default App;
