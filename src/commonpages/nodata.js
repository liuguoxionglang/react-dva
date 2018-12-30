import React,{Component} from 'react'
import nodata from '../assets/nodata.png'


/**
 * 说明:数据已经加载完成，但查无数据时，显示组件
 */
export  default class NoData extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div size="large" style={{width: '100%', margin:'40px 0 !important',height:'100%',
        color:'#45fefc',position:'relative'}} >
        <div style={{position:'absolute',top:'45%',left:'50%'}}>
          <img src={nodata} style={{width:'30%',height:'30%',}}/>
          <div style={{width:'30%',textAlign:'center'}}>暂无数据</div>
        </div>
      </div>
    )
  }
}
