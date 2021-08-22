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
    case "createLinkListSuccess":
      try {
        let tag=action.payload.data.newData.tag
        let term=action.payload.data.thisData.term
        if (state.linkList[term].data[tag]) {
          state.linkList[term].data[tag]=[...state.linkList[term].data[tag],action.payload.data.newData]
        }else{
          state.linkList[term].data[tag]=[]
          state.linkList[term].data[tag].push(action.payload.data.newData)
        }
      } catch (error) {
        console.error('listTestError',action.payload,error )
      }
      return { ...state };
    case "createLinkListStart":
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
