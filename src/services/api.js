import {
  stringify
} from 'qs';
import {
  getToken,
  BASE_URL
} from '../utils/utils'
export async function fakeAccountLogin(params) {
 /* return fetch(`${BASE_URL()}/loginsyn`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      // 'Content-Type': 'application/json', //这个安全认证的login Content-Type只能是这个，不能是json
      'Content-Type': 'application/json', //参数为json格式
    },
    body: JSON.stringify(_params),
  }).then((response) => {
    console.log("登录返回的response", response)
    if (response.status === 200) {
      const token = response.headers.get("authtoken");
      const expiration = response.headers.get("expiration");
      // console.log("token", token);
      // console.log("expiration", expiration);
      //这里没法把token和response json放一起，那就现在这放吧。
      sessionStorage.setItem("authtoken", token);
      sessionStorage.setItem("expiration", expiration);
    }
    return response.json();
  }).then(json => {
    console.log("登录返回的数据", json);
    return json;
  });*/
 if(params.userName==='admin' && params.password==='888888'){
   return {
     currentAuthority: "ROLE_ADMIN",
     msg: "登录成功",
     status: "ok",
     type: "account",
     currentUser:{
       avatar: "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
       glbm: "620100000000",
       name: "admin",
       notifyCount: 12,
       userid: "00000001",
     }

   }
 }else {
   return {
     currentAuthority: "guest",
     msg: "坏的凭证1",
     status: "error",
     type: "account",
   }
 }

}

export function refreshToken() {
  const token = getToken();
  return fetch(`${BASE_URL()}/jwtauth/refreshToken`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      // 'Content-Type': 'application/json', //这个安全认证的login Content-Type只能是这个，不能是json
      'Content-Type': 'application/json', //参数为json格式
      'authtoken': token,
    },
  }).then((response) => {
    return response.json();
  }).then(json => {
    return json;
  });
}
