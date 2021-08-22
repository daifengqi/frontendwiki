const initState = {
  code: -3,
  data: [],
  createComment:-1
};
const commentReducer = (state = initState, action) => {
  switch (action.type) {
    case "authError":
    case "getCommentListSuccess":
    case "getCommentListStart":
    case "getCommentListFail":
    case "createCommentStart":
      return { ...state, ...action.payload };
    case "createCommentSuccess":
      let newData=[...state.data,action.payload.data]
      state.data=newData
      state.code=1
      state.id=action.payload.id
      return {...state};
    default:
      return {...state};
  }
};
export default commentReducer;
