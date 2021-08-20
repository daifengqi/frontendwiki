import axios from "axios";
import store from '../store/index.js';

const getCommentList = (id) => (dispatch) => {
    //多一步存储
    dispatch({ type: "getLinkListStart" ,payload:{[`${id}`]:{code:0}}});
    console.log("store",store.getState().linkReducer )
    axios
    .get("/getlink", {
        params: {
            id: id,
        },
    })
    .then((res) => {
        dispatch({ type: "getLinkListSuccess", payload: {...res,code:1} });
    })
    .catch((e) => {
        dispatch({ type: "getLinkListFail", payload: {...res,code:-1} });
    });
};