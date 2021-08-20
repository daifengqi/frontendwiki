import axios from "axios";
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
export const getLinkList = (options) => (dispatch) => {
  if (!options) options = "all";
  dispatch({
    type: "getLinkListStart",
    payload: {
      [`${JSON.stringify(options)}`]: { code: 0 },
    },
  });
  axios
    .get("/linkQuery", {
      params: options,
    })
    .then((res) => {
      dispatch({
        type: "getLinkListSuccess",
        payload: {
          [`${JSON.stringify(options)}`]: {
            data: { ...res },
            code: 1,
          },
        },
      });
    })
    .catch((e) => {
      dispatch({
        type: "getLinkListFail",
        payload: {
          [`${JSON.stringify(options)}`]: {
            data: { ...e },
            code: -1,
          },
        },
      });
      console.log("store", store.getState().linkReducer);
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
export const createLink = (data) => (dispatch) => {
  dispatch({ type: "createLinkListStart", payload: { createLink: 0 } });
  axios
    .post("/link/create", data)
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
export const getOneLink = (id) => (dispatch) => {
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
