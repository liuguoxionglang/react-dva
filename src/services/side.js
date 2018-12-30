import request from '../utils/request';
import requestXML from '../utils/requestXML';

export function getBusiness() {
  return request('/api/getBussInfo');
}
export function getException() {
  return request('/api/getExceptionInfo');
}
export function getExceptionChildData() {
  return request('/api/getExceptionChildData');
}
export function getAgentInfo() {
  return request('/api/getAgentInfo');
}
export function getCardInfo() {
  return request('/api/getCardData');
}
export function getCardChildData() {
  return request('/api/getCardChildData');
}
export function getBusinessChildData() {
  return request('/api/getBusinessChildData');
}
// 获取代理人的方法
export function getPicturesFromHikVision() {
  return requestXML('/ISAPI/Security/sessionLogin/capabilities');
}

// 获取人脸记录
export function getFacesFromHikVision(param) {
  return request('/ISAPI/Intelligent/FDLib?format=json',param);
}
