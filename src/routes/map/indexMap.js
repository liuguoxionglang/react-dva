import React,{Component} from 'react'
import './mapdatafiles'
import ReactCharts from 'echarts-for-react'
import {connect} from 'dva'
import 'rodal/lib/rodal.css';



@connect(({map,loading})=>({
  map,
  loading
}))
export  default class IndexMapPanel extends Component{

	constructor(props){
		  super(props);

	}

  // 组件挂载之前 加载当前用户管理部门下的数据
  componentWillMount() {

  }

  // 地图上的单击事件
  onChartClick(param, echart) {

  }

  // 子组件赋值给child
  onRef =(ref)=>{
    this.child= ref;
  };

  render(){
    // 地图单击事件
    let onEvents = {'click': this.onChartClick};
    console.log(this.props.map,"......");
    const option = {
      grid:{
        x:0,
        y:0,
        x2:0,
        y2:0
      },
      geo: {
        map: this.props.map.mapname,
        zlevel:1,
        label: {
          normal:{
            show:true,
            textStyle: {
              color: '#5fe3f5',
              fontSize:15
            }
          },
          emphasis: {
            show:true,
            textStyle: {
              color: '#5fe3f5',
              fontSize:15
            }
          }
        },
        roam: false,
        layoutCenter: ['50%', '51%'],
        layoutSize: '97%',
        itemStyle: {
          normal: {
            areaColor: 'rgba(0,0,0,0)',
            borderColor: '#23c7ee',
            borderWidth:2
          },
          emphasis: {
            areaColor: 'rgba(0,0,0,0)',
            borderColor: '#23c7ee',
          }
        }
      },
      series : [

      ]
    };
		return (
		  <div style={{height:'100%',width:'100%'}}>
        <ReactCharts
          option={option}
          ref={(e)=>{this.map = e}}
          onEvents={onEvents} style={{height:'1000px',width:'1920px'}}/>

      </div>
    )
	}
}
