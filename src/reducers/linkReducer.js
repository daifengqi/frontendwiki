const initState = {
  linkList: {},
};
const linkReducer = (state = initState, action) => {
  switch (action.type) {
    case "getLinkListSuccess":
      state.linkList = { ...state.linkList, ...action.payload };
      return { ...state };
    case "getLinkListFail":
    case "getLinkListFromLocal":
      return { ...state };
    case "createLinkListSuccess":
      try {
        action.payload.data.newData['hasThumbed']=false;
        action.payload.data.newData['thumbNums']=0
        let tag=action.payload.data.newData.tag
        let term=action.payload.data.thisData.term
        if (state.linkList[term].data[tag]) {
          console.log(1)
          state.linkList[term].data[tag]=[...state.linkList[term].data[tag],action.payload.data.newData]
        }else{
          state.linkList[term].data[tag]=[{...action.payload.data.newData}]
        }
      } catch (error) {
        console.error('listTestError',action.payload,error )
      }
      state.linkList={...state.linkList}
      return { ...state };
    case "likeLinkSuccess":
    case "collectLinkSuccess":
      let tag=action.payload.success.tag
      let term=action.payload.success.term
      let id=action.payload.success.id
      let index=null;
      state.linkList[term].data[tag].filter((item,i)=>{
        if(item.id==id) index=i;
      })
      if (index!=null) {
        state.linkList[term].data[tag][index][action.type=="likeLinkSuccess"?'hasThumbed':'hasCollect']=true;
        state.linkList[term].data[tag][index][action.type=="likeLinkSuccess"?'thumbNums':'collectNums']++;
      }
      return JSON.parse(JSON.stringify(state));
    case "createLinkListFail":
    case "likeLinkFail":
    case "authError":
      return { ...state, ...action.payload };
    case "createLinkListStart":
    case "likeLinkStart":
    default:
      return state;
  }
};
export default linkReducer;
