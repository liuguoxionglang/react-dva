// 翻译业务预警类型
export  const translateYWYJ =(arr,val)=> {
  let result=val;
  if(arr && Array.isArray(arr)) {
    for(let i=0;i<arr.length;i++) {
      if(arr[i].xmbh.toString()===val.toString()) {
        result=arr[i].xmmc;
        break;
      }
    }
  }
  return result;
}
// 翻译业务预警类型
export  const translateFrmCode =(arr,val)=> {
  let result=val;
  if(arr && Array.isArray(arr)) {
    for(let i=0;i<arr.length;i++) {
      if(arr[i].dmz.toString()===val.toString()) {
        result=arr[i].dmsm1;
        break;
      }
    }
  }
  return result;
}
