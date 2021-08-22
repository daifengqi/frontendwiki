const initState = {
  linkList: {},
};
const linkReducer = (state = initState, action) => {
  console.log("linkReducer", state);
  switch (action.type) {
    case "getLinkListSuccess":
      state.linkList = { ...state.linkList, ...action.payload };
      return { ...state };
    case "getLinkListFail":
    case "getLinkListFromLocal":
      return { ...state };
    case "createLinkListStart":
    case "createLinkListSuccess":
      let newData=[...state.data,action.payload.data]
      state.data=newData
      state.code=1
      state.id=action.payload.id
    case "createLinkListFail":
    case "likeLinkSuccess":
    case "likeLinkStart":
    case "likeLinkFail":
    case "authError":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default linkReducer;
