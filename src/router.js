import React from 'react';
import { routerRedux, Route, Switch, Redirect } from 'dva/router';
import { LocaleProvider, Spin } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import dynamic from 'dva/dynamic';
import { getRouterData } from './common/router';
import Authorized from './utils/Authorized';
import styles from './index.less';
import { getAuthority } from './utils/authority';

const { ConnectedRouter } = routerRedux;
const { AuthorizedRoute } = Authorized;

const hasPermission=()=>{
  //这样写看似对着，如果人家在控制台添加一个authority，那就有问题了
  //所以还需要加一层，控制区拦截！！！暂时用menuList吧，其实好像没多大用
  const authority = getAuthority();
  if(authority&&authority!=='guest'){
      return true;
  }
  return false;
};

dynamic.setDefaultLoadingComponent(() => {
  return <Spin size="large" className={styles.globalSpin} />;
});

//-----add by zxj  dva传过来的app 里面有models 和 store
function RouterConfig({ history, app }) {
  const routerData = getRouterData(app);
  console.log("app",app);
  const UserLayout = routerData['/user'].component;
  const MainPanel = routerData['/'].component;
  return (
    <LocaleProvider locale={zhCN}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route
            path="/user"
            component={UserLayout}
          />
          <AuthorizedRoute
            path="/"//这个之前写的/admin，必须写成/不然其他开头的路由登不进去
            render={props => <MainPanel {...props} />}
            authority={['ROLE_USER','ROLE_ADMIN']}//这个控制那种角色能访问主页面
            //authority={()=>hasPermission()}//不加这个就自动跑到主页面去了
            redirectPath="/user/login"
          />
          <Redirect exact from="/" to="/user/login" />
        </Switch>
      </ConnectedRouter>
    </LocaleProvider>
  );
}

export default RouterConfig;




// import React from 'react';
// import { Router, Route, Switch } from 'dva/router';
// import MainPanel from './routes/main/MainPanel';
// import { LocaleProvider,Spin } from 'antd';
// import zhCN from 'antd/lib/locale-provider/zh_CN';
// import dynamic from 'dva/dynamic';
// import styles from './index.less';
// dynamic.setDefaultLoadingComponent(() => {
//   return <Spin size="large" className={styles.globalSpin} />;
// });
// function RouterConfig({ history ,app}) {
//   console.log("app",app);
//   return (
//     <LocaleProvider locale={zhCN}>
//       <Router history={history}>
//         <Switch>
//           {/* <Route path="/" exact component={MainPanel} /> */}
//           <Route path="/" exact render={props => <MainPanel {...props} />} />
//         </Switch>
//       </Router>
//   </LocaleProvider>
//   );
// }

// export default RouterConfig;
