import React from "react";
import HomeHead from "../HomeHead/index.jsx";
import HomeMain from "../HomeMain/index.jsx";
import styles from "./home.module.css";
import {getLinkList,createLink} from '../../actions/linkActions';
import { useDispatch ,useSelector} from "react-redux";

function Home() {
  const dispatch = useDispatch();
  dispatch(getLinkList({
    term:"1"
  })) 
  dispatch(getLinkList({
    term:"2",
    tag:"1"
  }))
  dispatch(createLink({
    test:"1"
  }))
  let res = useSelector(state => state.linkReducer.code)
  console.log("res",res)
  return (
    <>
      <HomeHead />
      <HomeMain />
    </>
  );
}

export default Home;
