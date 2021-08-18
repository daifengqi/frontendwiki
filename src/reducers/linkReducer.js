import store from "../store";
//store是react项目中存储state的地方，理解：一个巨大的JavaScript对象
import {connect} from 'react-redux';
//把组件和store连接起来，并且可以获取state



let initialState = {}

const linkReducer = (state = initialState, action) => {
    //接收了之前的state和action作为参数的纯函数，返回一个更新后的state
    switch (action.type) {
        default:
            return state;
    }
}
export default linkReducer