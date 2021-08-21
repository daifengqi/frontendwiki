import axios from "axios";
import store from "../store/index.js";

const getCommentList = (id) => (dispatch) => {
  dispatch({
    type: "getCommentListStart",
    payload: {
      [`${id}`]: { code: 0 },
    },
  });
  axios
    .get(`comment/${id}`)
    .then((res) => {
      dispatch({
        type: "getCommentListSuccess",
        payload: {
          [`${id}`]: {
            code: 1,
            data: res,
          },
        },
      });
    })
    .catch((e) => {
      dispatch({
        type: "getCommentListFail",
        payload: {
          [`${id}`]: {
            code: -1,
            data: e,
          },
        },
      });
    });
};

const createComment = (data) => (dispatch) => {
  dispatch({
    type: "createCommentStart",
    payload: {
      createComment:0
    },
  });
  axios.post('/comment/create',data)
  .then(res=>{
    dispatch({
        type: "createCommentSuccess",
        payload: {
          createComment:1
        },
      });
  })
  .then(e=>{
    dispatch({
        type: "createCommentSuccess",
        payload: {
          createComment:-1
        },
      });
  })
};
const likeComment=(id)=>(dispatch)=>{
  dispatch({
    type:"likeCommentStart",
    payload:{
      likeComment:0
    }
  })
  axios.post(`/user/${id}/thumbComment`)
  .then(res=>{
    dispatch({
      type:"likeCommentSuccess",
      payload:{
        likeComment:1
      }
    })
  })
  .catch(e=>{
    console.log('thumbLink',e )
    dispatch({
      type:"likeCommentFail",
      payload:{
        likeComment:-1
      }
    })
  })
}

export { getCommentList,createComment };
