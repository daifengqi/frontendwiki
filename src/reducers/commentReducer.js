const initState={

}
const commentReducer = (state = initState, action) => {
  switch (action.type) {
    case "getLinkListStart":
    case "createLinkListStart":
    case "getLinkListSuccess":
    case "getLinkListFail":
    case "createLinkListSuccess":
    case "createLinkListFail":
        return {...state, ...action.payload};
    default:
      return state;
  }
};
export default commentReducer;