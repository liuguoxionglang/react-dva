import React,{Component} from 'react'
import {Spin} from 'antd'

/**
 * 说明:数据正在加载中组件
 */
export  default class LoadingData extends Component{

  constructor(props){
    super(props);
  }
  render(){
    return (
      <Spin size="large" style={{width: '100%', margin:'40px 0 !important' }} />
    )
  }
}
