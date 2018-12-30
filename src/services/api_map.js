import request from '../utils/request';
import {
  getToken,
  BASE_URL
} from '../utils/utils'
export function getXzqhAndMapName(param) {
  const _param= {bmdh:param};
  const token = getToken();
  // console.log(_param,"...........getXzqhAndMapName...........");
  return fetch(`${BASE_URL()}/getGlbmOrSjbm`,{
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authtoken': token,
    },
    body: JSON.stringify(_param),
  }).then(response=>response.json()).then(json=>json)
  .catch(err=>{
    console.log(err,".....getXzqhAndMapName....错误err");
  })
}

export function getJSONdata(param) {
  return fetch(`${BASE_URL()}/${param}`).then(response=>response.json()).then(json=>json)
    .catch(err=>{
      console.log(err,".....错误err");
    })

 /* return fetch(`http://192.168.0.206:9871/zdvsplate//rest/getDepYyywlx`,{
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({sfzmhm:'620422199012043216',xlh:'11111111111111111111111111111111',yysj:'2018-08-20',glbm:'620100000400'}),
  }).then(response=>response.json()).then(json=>json)
    .catch(err=>{
      console.log(err,".....getXzqhAgetPubConfigCszArr....错误err");
    })*/
}



export function getSoftInfo(param) {
  const token = getToken();
  return fetch(`${BASE_URL()}/getSysInfo`,{
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'authtoken': token,
    },
    body:param,
  }).then(response=>response.json()).then(json=>json)
    .catch(err=>{
      console.log(err,".....getSoftInfo....错误err");
    })
}


export function getPubConfigCszArr(param) {
  const _param='csmc='+param;
  const token = getToken();
  console.log(_param,token,".........getPubConfigCszArr.................getPubConfigCszArr");
  return fetch(`${BASE_URL()}/getPubConfigCsz`,{
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'authtoken': token,
    },
    body:_param,
  }).then(response=>response.json()).then(json=>json)
    .catch(err=>{
      console.log(err,".....getXzqhAgetPubConfigCszArr....错误err");
    })
}


// 业务预警类型
export function getywyjTypeCode(param) {
  const token = getToken();
  return fetch(`${BASE_URL()}/getFrmYwjgItemListByXtlb`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'authtoken': token,
    },
    body: param
  }).then(response=>response.json()).then(json=>json).catch(err=>{console.log(err,".....getFrmYwjgItemXmmc....")});
}
// 获取code表
export function getFrmCode(param) {
  const token = getToken();
  return fetch(`${BASE_URL()}/getFrmCodeListByXtlbDmlb`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'authtoken': token,
    },
    body: param
  }).then(response=>response.json()).then(json=>json).catch(err=>{console.log(err,".....getFrmYwjgItemXmmc....")});
}



export function getPicturesFromHikVision(param) {
  const token = getToken();
  return fetch(`${BASE_URL}/getFrmCodeListByXtlbDmlb`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: param
  }).then(response=>response.json()).then(json=>json).catch(err=>{console.log(err,".....getFrmYwjgItemXmmc....")});
}


