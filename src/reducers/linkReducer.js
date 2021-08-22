const initState = {
  linkList:{}
};
const linkReducer = (state = initState, action) => {
  console.log('linkReducer',state)
  switch (action.type) {
    case "getLinkListSuccess":
      state.linkList={...state.linkList, ...action.payload};
      return {...state};
    case "getLinkListFail":
    case 'getLinkListFromLocal':
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
