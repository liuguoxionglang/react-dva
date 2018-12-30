export default {
  namespace: 'side',
  state: {
  },

  effects: {
    // *fetch({ payload }, { call, put }) {  // eslint-disable-line
    //   const response = yield call(getCardInfo,payload);
    //   yield put({
    //     type: 'save' ,
    //     payload:response
    //   });
    // },
  },

  reducers: {
    save(state, action) {
        // console.log("side 总数据",action.payload);
      return { ...state, ...action.payload };
    },
  },

};
