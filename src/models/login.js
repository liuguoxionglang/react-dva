import { routerRedux } from 'dva/router';
import { fakeAccountLogin, } from '../services/api';
import { setAuthority } from '../utils/authority';
import { reloadAuthorized } from '../utils/Authorized';
import { setBasicInfoToSessionStorage } from '../utils/utils';
import {getSoftInfo} from '../services/api_map';


export default {
  namespace: 'login',

  state: {
    status: undefined,
    currentUser: {},
    msg:'',
  },

  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(fakeAccountLogin, payload);
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });
      // Login successfully
      if (response.status === 'ok') {
        //由于传过来的信息放到reducer里面刷新页面的时候没有重新登录所以值会被制空，因此保存到sessionStorage方便一些！
        // 登录成功后获取软件信息

        setBasicInfoToSessionStorage(response.currentUser);
        reloadAuthorized();
        yield put(routerRedux.push('/admin/index'));
      }
    },
    *logout(_, { put, select }) {
      try {
        // get location pathname
        const urlParams = new URL(window.location.href);
        const pathname = yield select(state => state.routing.location.pathname);
        // add the parameters in the url
        urlParams.searchParams.set('redirect', pathname);
        window.history.replaceState(null, 'login', urlParams.href);
      } finally {
        yield put({
          type: 'changeLoginStatus',
          payload: {
            status: false,
            currentAuthority: 'guest',
          },
        });
        reloadAuthorized();
        sessionStorage.removeItem("currentUser")//清除当前用户
        sessionStorage.removeItem("antd-pro-authority")//清除当前用户权限
        sessionStorage.removeItem("authtoken")//清除token
        yield put(routerRedux.push('/user/login'));
      }
    },
  },
  reducers: {
    changeLoginStatus(state, { payload }) {
      //登录的时候把登录用户的权限信息存放到sessionStorage，访问的时候从他那去取
      const authority = payload.currentAuthority.split(",")
      setAuthority(authority);
      return {
        ...state,
        status: payload.status,
        type: payload.type,
        msg:payload.msg,
      };
    },
  },
};
