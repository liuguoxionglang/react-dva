import React from 'react';
import PromiseRender from './PromiseRender';
import { CURRENT } from './index';

function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === 'object' || typeof obj === 'function') &&
    typeof obj.then === 'function'
  );
}

/**
 * 通用权限检查方法
 * Common check permissions method
 * @param { 权限判定 Permission judgment type string |array | Promise | Function } authority
 * @param { 你的权限 Your permission description  type:string} currentAuthority
 * @param { 通过的组件 Passing components } target
 * @param { 未通过的组件 no pass components } Exception
 */
const checkPermissions = (authority, currentAuthority, target, Exception) => {
  // 没有判定权限.默认查看所有
  // Retirement authority, return target;
  if (!authority) {
    return target;
  }
  // console.log(authority,currentAuthority,"这是转入权限与当前用户权限。。。。。。。。。。。。。。")
  // 数组处理
  if (Array.isArray(authority)) {
    //当准入权限为数组时,
    if(currentAuthority.indexOf(",")>0 && Array.isArray(currentAuthority.split(","))){
      // console.log(currentAuthority.split(","),"currentAuthority....................",authority);
      const authArr = currentAuthority.split(",");
      for(var i=0;i<authArr.length;i++){
        if (authority.indexOf(authArr[i]) >= 0) {
          // console.log(authArr[i],"authArr[i]............")
          return target;
        }
      }
      return Exception;
    }else{
      if (authority.indexOf(currentAuthority) >= 0) {
        return target;
      }
      return Exception;
    }

    /*if (authority.indexOf(currentAuthority) >= 0) {
      return target;
    }
    return Exception;*/
  }

  // string 处理
  if (typeof authority === 'string') {
    console.log("string..........................")
    if (authority === currentAuthority) {
      return target;
    }
    return Exception;
  }

  // Promise 处理
  if (isPromise(authority)) {
    return <PromiseRender ok={target} error={Exception} promise={authority} />;
  }

  // Function 处理
  if (typeof authority === 'function') {
    try {
      const bool = authority(currentAuthority);
      if (bool) {
        return target;
      }
      return Exception;
    } catch (error) {
      throw error;
    }
  }
  throw new Error('unsupported parameters');
};

export { checkPermissions };

const check = (authority, target, Exception) => {
  return checkPermissions(authority, CURRENT, target, Exception);
};


export default check;
