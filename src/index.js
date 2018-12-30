import '@babel/polyfill';
import 'url-polyfill';
import 'raf/polyfill'
import dva from 'dva';
import createHistory from 'history/createHashHistory';
import createLoading from 'dva-loading';
// 1. Initialize
const app = dva();

// 2. Plugins
app.use(createLoading());

// 3. Model
  // models  namespace数组
const models = ['global','map','side'];
  /* 之前的项目是人家在路由加载的，现在没有路由，就只能写到这了
    思路：写个方法获取文件加下所有文件，然后动态全部注入，不用一个一个写了
  */
const modelNotExisted = (app, model) => (
  // eslint-disable-next-line
  !app._models.some(({ namespace }) => {
      // console.log(namespace,model.substring(model.lastIndexOf('/') + 1))
    return namespace === model.substring(model.lastIndexOf('/') + 1);
  })
);
models.forEach((model) => {
  if (modelNotExisted(app, model)) {
    app.model(require(`./models/${model}`).default);
  }
});

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
const store  = app._store;
export default store;  // eslint-disable-line

