import {getComment,createComment,thumbComment} from '../api/index.js';
import store from "../store/index.js";

const getCommentListAction = (id) => (dispatch) => {
  dispatch({
    type: "getCommentListStart",
    payload: {
      id:id,
      code:0,
      data:[]
    },
  });
  getComment(id)
    .then((res) => {
      console.log('commenList',res.data.data )
      dispatch({
        type: "getCommentListSuccess",
        payload: {
          code:1,
          id:id,
          data:res.data.data
        },
      });
    })
    .catch((e) => {
      console.error('getCommentListFail',e )
      dispatch({
        type: "getCommentListFail",
        payload: {
          code:-1,
          id:id,
          data:[]
        },
      });
    });
};
const createCommentAction = (data) => (dispatch) => {
  if (!JSON.parse(localStorage.getItem("profile"))) {
    dispatch({
      type:"authError",
      payload:{code:-2}
    })
    return;
  }
  dispatch({
    type: "createCommentStart",
    payload: {
      createComment:0
    },
  });
  createComment(data)
  .then(res=>{
    console.log('res',res )
    dispatch({
        type: "createCommentSuccess",
        payload: {
          createComment:1,
          data:res.data.comment
        },
      });
  })
  .catch(e=>{
    dispatch({
        type: "createCommentFail",
        payload: {
          createComment:-1
        },
      });
  })
};
const likeCommentAction=(id)=>(dispatch)=>{
  if (!JSON.parse(localStorage.getItem("profile"))) {
    dispatch({
      type:"authError",
      payload:{code:-2}
    })
    return;
  }
  thumbComment({
    commentId:id
  })
  .then(res=>{
    console.log('likeCommentSuccess',res )
    dispatch({
      type:"likeCommentSuccess",
      payload:{
        likeComment:1,
        id
      }
    })
  })
  .catch(e=>{
    console.log('likeCommentFail',e )
    dispatch({
      type:"likeCommentFail",
      payload:{
        likeComment:-1
      }
    })
  })
}
const cleanCommentAction=()=>(dispatch)=>{
  dispatch({
    type:"cleanCommentAction"
  })
}

export { getCommentListAction,createCommentAction,likeCommentAction,cleanCommentAction };