const initState = {
  code: -3,
  data: [],
  createComment:-1
};
const commentReducer = (state = initState, action) => {
  console.log("commentReducer", state);
  switch (action.type) {
    case "authError":
    case "getCommentListSuccess":
    case "getCommentListStart":
    case "getCommentListFail":
    case "createCommentStart":
    case "createCommentSuccess":
    case "createCommentSuccess":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default commentReducer;
