import { getBusiness} from '../services/side';
import {getJSONdata,getXzqhAndMapName,getPubConfigCszArr} from '../services/api_map';
export default {
  namespace: 'map',

  state: {
    mapname:'china'
  },

  effects: {
    *getjsondata({payload},{call,put}) {
      const response = yield call(getJSONdata,payload);
      //console.log(response,".......获取到的json数据............王哥测试。。。。。...获取到的json数据............王哥测试。。。。。。。。");
      yield put({
        type:'saveMapdata',
        payload:response
      })
    },
    *getXZQHAndMapName({payload,callback},{call,put}) {
      const response = yield call(getXzqhAndMapName,payload);
      console.log(response,".......获取到的getXzqhAndMapName......json数据");
      if(response.depList && response.depList.length>0) {
        let mapname='';
        let mapToXZQH='';
        let bmjb ='';
        let bmjc = '';
        response.depList.forEach(
          (item)=>{
            if(item.bmdh===payload){
              mapname=item.bmdtmc;
              mapToXZQH=item.xzqh;
              bmjb=item.bmjb;
              bmjc=item.bmjc;
              // 初始化地图名称
            }
          }
        );
        console.log(mapname,mapToXZQH,"..............mapname,mapToXZQH..........");
        // 保存当前地图名称
        yield put({
          type:'saveMapName',
          payload:{mapname:mapname}
        });

        // 连接socket，从后台请求数据
        if(callback) callback(mapToXZQH,payload,bmjb);
        // 保存当前地图所对应的新政区划 或者管理部门
        yield put({
          type:'saveMapToGlbm',
          payload:{mapToXZQH:payload}
        });
       /* if(bmjb==='3') { // 支队用户
          // 初始化地图对应的行政区划
          yield put({
            type:'saveMapToGlbm',
            payload:{mapToXZQH:mapToXZQH}
          });
        }else if(bmjb==='4') {  // 大队用户
          // 初始化地图对应的行政区划
          yield put({
            type:'saveMapToGlbm',
            payload:{mapToXZQH:payload}
          });
        }*/
       // 保存管理部门与地图名称的对应关系
        yield put({
          type:'saveXZQHMapName',
          payload:response.depList
        });
        if(bmjb==='3'){ // 支队用户
          // 保存当前展示数据的管理部门
          yield put({
            type:'saveCurrentDepName',
            payload:{currentDepName:mapname}
          })
        }
        else if(bmjb==='4') { // 大队用户
          // 保存当前展示数据的管理部门
          yield put({
            type:'saveCurrentDepName',
            payload:{currentDepName:bmjc}
          })
        }


      }
    },
    *getPubConfigCsz({payload},{call,put}) {
      const response = yield call(getPubConfigCszArr,payload);
      console.log(response,".......获取到的getPubConfigCsz......json数据");
      if(response) {
        sessionStorage.setItem("csz",JSON.stringify(response));
      }
    }
  },

  reducers: {
    saveMapName(state, { payload }) {
      // console.log(payload,"...........saveMapName..")
      return {
        ...state,
        ...payload
      };
    },
    saveXZQHMapName (state, { payload }) {
      return {
        ...state,
        XZQHToMapname:payload
      };
    },
    saveMapToGlbm (state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },
    saveMapdata(state,{payload}) {
      return {
        ...state,
        mapdata:payload
      }
    },
    saveOrderData(state, { payload }) {
      console.log(payload,"...........saveOrderData..");
      return {
        ...state,
        ...payload
      };
    },
    saveCurrentDepName(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },
    saveLocalizationData (state, locationData) {
      return { ...state,...locationData };
    },
    updateCountUpNum(state,{payload}) {
      return {
        ...state,
        countUpNum:payload
      }
    },
  },

};
