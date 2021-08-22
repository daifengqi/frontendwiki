import {getLinksbyTerm,createLink,thumbLink,collectLink} from '../api/index.js';
import store from "../store/index.js";


/**
 * @author source
 * @updateTime 2021/8/20 16:00
 * 通过词条id或者tap参数，获得词条以及标签下的链接列表;
 * @param options {Object}
 * {
    term:xxx,
    tag:xxx
 } 
 * 非必填
 */
const getLinkListAction = (term) => (dispatch) => {
  if (store.getState().linkReducer[term]) {
    dispatch({
      type: "getLinkListFromLocal"
    });
    return;
  }
  getLinksbyTerm(term)
    .then((res) => {
      let {data}=res.data;
      let tagMap={}
      data.forEach(element => {
        if (!tagMap[element.tag]) {
          tagMap[element.tag]=[]
        }
        tagMap[element.tag].push({
          intro:element.intro,
          thumbNums:element.thumbNums,
          id: element.id,
          hasThumbed: element.hasThumbed,
          url:element.url
        })
      });
      dispatch({
        type: "getLinkListSuccess",
        payload: {
          [`${term}`]: {
            data: tagMap,
            code: 1,
          },
        },
      });
    })
    .catch((e) => {
      console.error('e',e )
      dispatch({
        type: "getLinkListFail"
      });
    });
};

/**
 *@author source
 *@updateTime 2021/8/20 16:00
*传入如下参数添加一条链接
{
    "creator":"test12",
    "creatorId":100003,
    //creatorId应该在云端生成...
    "term":"test",
    "url":"http://www.baidu.com",
    "tag": "test",
    "intro":"简介"
}
*/
const createLinkAction = (data) => (dispatch) => {
  dispatch({ type: "createLinkListStart", payload: { createLink: 0 } });
  createLink(data)
    .then((res) => {
      dispatch({ type: "createLinkListSuccess", payload: { createLink: 1 } });
    })
    .catch((e) => {
      console.error("createLinkListFail", e);
      dispatch({ type: "createLinkListFail", payload: { createLink: -1 } });
    });
};
/**
 *获得某一条标签信息???这个有用么
 *@author source
 *@updateTime 2021/8/20 16:00
 */
const getOneLinkAction = (id) => (dispatch) => {
  dispatch({ type: "getOneLinkStart", payload: { oneLink: { code: 0 } } });
  axios
    .get("/link/" + id)
    .then((res) => {
      dispatch({
        type: "getOneLinkSuccess",
        payload: {
          oneLink: {
            code: 1,
            data: res,
          },
        },
      });
    })
    .catch((e) => {
      dispatch({
        type: "getOneLinkFail",
        payload: {
          oneLink: {
            code: -1,
            data: e,
          },
        },
      });
    });
};
/**
 * @author source
 * @updateTime 2021/8/21 21:00
 * @param {String} id 
 * @returns 
 */

const likeLinkActionk=(id)=>(dispatch)=>{
  if (!JSON.parse(localStorage.getItem("profile"))) {
    dispatch({
      type:"authError",
      code:-2
    })
    return;
  }
  dispatch({
    type:"likeLinkStart",
    payload:{
      likeLink:0
    }
  })
  thumbLink(id)
  .then(res=>{
    dispatch({
      type:"likeLinkSuccess",
      payload:{
        likeLink:1
      }
    })
  })
  .catch(e=>{
    console.log('thumbLink',e )
    dispatch({
      type:"likeLinkFail",
      payload:{
        likeLink:-1
      }
    })
  })
}
const collectLinkAction=(id)=>(dispatch)=>{
  if (!JSON.parse(localStorage.getItem("profile"))) {
    dispatch({
      type:"authError",
      code:-2
    })
    return;
  }
  dispatch({
    type:"collectLinkStart",
    payload:{
      collectLink:0
    }
  })
  collectLink(id)
  .then(res=>{
    dispatch({
      type:"collectLinkSuccess",
      payload:{
        collectLink:1
      }
    })
  })
  .catch(e=>{
    console.log('collectLinkFail',e )
    dispatch({
      type:"collectLinkFail",
      payload:{
        collectLink:-1
      }
    })
  })
}
export {getLinkListAction,createLinkAction,getOneLinkAction,likeLinkActionk,collectLinkAction}