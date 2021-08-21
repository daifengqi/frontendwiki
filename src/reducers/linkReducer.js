import axios from "axios";

Array.prototype.add=function(data){

}
const initState = {
  linkList:[]
};
const linkReducer = (state = initState, action) => {
  console.log('state',state)
  switch (action.type) {
    case "getLinkListStart":
    case "getLinkListSuccess":
    case "getLinkListFail":
      state.linkList={...state.linkList, ...action.payload};
      return {...state};
    case "createLinkListStart":
    case "createLinkListSuccess":
    case "createLinkListFail":
    case "likeLinkSuccess":
    case "likeLinkStart":
    case "likeLinkFail":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default linkReducer;
