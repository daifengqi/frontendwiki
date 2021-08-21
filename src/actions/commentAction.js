import axios from "axios";
import store from "../store/index.js";

const getCommentList = (id) => (dispatch) => {
  dispatch({
    type: "getCommentListStart",
    payload: {
      [`${id}`]: { code: 0 },
    },
  });
  axios.get(`comment/${id}`)
  .then(res=>{
      dispatch({
          type:"getCommentListSuccess",
          payload:{
              [`${id}`]:{
                  code:1,
                  data:res
              }
          }
      })
  })
  .catch(e=>{
    dispatch({
        type:"getCommentListFail",
        payload:{
            [`${id}`]:{
                code:-1,
                data:e
            }
        }
    })
})
};

export {getCommentList};