import React, { Fragment } from 'react';
import { Link, Redirect, Switch, Route } from 'dva/router';
import DocumentTitle from 'react-document-title';
import { Icon } from 'antd';
import GlobalFooter from '../components/GlobalFooter';
import './UserLayout.less';
import gh from '../assets/gh.png';
import { getRoutes } from '../utils/utils';

const links = [ {
  key: 'terms',
  title: '中国铁路总公司',
  href: '',
}];

const copyright = <Fragment>Copyright <Icon type="copyright" /> XXXXXXXX有限公司出品</Fragment>;

class UserLayout extends React.PureComponent {
  getPageTitle() {
    const { routerData, location } = this.props;
    const { pathname } = location;
    let title = '可视化分析平台';
    if (routerData[pathname] && routerData[pathname].name) {
      title = `${routerData[pathname].name} - 可视化分析平台`;
    }
    return title;
  }
  render() {
    const { routerData, match } = this.props;
    return (
      <DocumentTitle title={this.getPageTitle()}>
        <div className='container'>
          <div className='content'>
            <div className='top'>
              <div className='header'>
                <Link to="/">
                  <img alt="logo" className='logo' src={gh} />
                  <span className='title'>可视化分析平台</span>
                </Link>
              </div>
              <div className='desc'>visual analysis platform</div>
            </div>
            <Switch>
              {getRoutes(match.path, routerData).map(item =>
                (
                  <Route
                    key={item.key}
                    path={item.path}
                    component={item.component}
                    exact={item.exact}
                  />
                )
              )}
              <Redirect exact from="/user" to="/user/login" />
            </Switch>
          </div>
          <GlobalFooter links={links} copyright={copyright} />
        </div>
      </DocumentTitle>
    );
  }
}

export default UserLayout;
