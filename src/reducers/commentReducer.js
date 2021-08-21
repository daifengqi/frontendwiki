const initState={

}
const commentReducer = (state = initState, action) => {
  switch (action.type) {
    case "getCommentListSuccess":
    case "getCommentListStart":
    case "getCommentListFail":
    case "createCommentStart":
    case "createCommentSuccess":
    case "createCommentSuccess":
        return {...state, ...action.payload};
    default:
      return state;
  }
};
export default commentReducer;