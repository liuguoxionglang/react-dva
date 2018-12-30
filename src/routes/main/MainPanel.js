import React,{Component} from 'react'
import { connect } from 'dva';
import './MainPanel.less';
import {Row,Col} from 'antd'
import IndexMapPanel from '../map/indexMap';
import CountUp from 'react-countup';
import $, { jQuery } from 'jquery'
import '../../js/compiled/flipclock.css'
import '../../js/compiled/flipclock'
import '../../css/pageTurning.less';
//import '../../../pageTurnComponent'
import pageTurn from '../../../pageTurningComponent'
import numeral from 'numeral';
import lodash from  'lodash';
import {Filter} from 'react-lodash'

@connect(({map,loading})=>({
    map,
    loading
  }
))
export default class MainPanel extends Component {
  constructor(props) {
    super(props);
    this.state={countnum:0}
  }

  // 组件挂载之前
  componentWillMount() {
//     let users = [
//       { 'user': 'barney', 'age': 36, 'active': true },
//       { 'user': 'fred',   'age': 40, 'active': false }
//     ];
// // ES6
//     users.filter((o) => o.active)
// // Lodash
//     lodash.filter(users, 'active')
//     lodash.filter(users, ['active', true])
//     lodash.filter(users, {'active': true, 'age': 36})
//     console.log( lodash.filter(users, ['active', true]),"........lodash.....");
   const arr = [1,2,3,4,5];

   console.log(lodash.chunk(arr,2),"....lodash.....")









  }

  // 组件挂载之后
  componentDidMount() {
    const that = this;
    setInterval(function () {
      const countUpNum = that.props.map.countUpNum;
      that.setState({countnum: countUpNum});
      const payload = countUpNum ? countUpNum + 1255 : 100
      that.props.dispatch(
        {
          type: 'map/updateCountUpNum',
          payload: payload,
        }
      )
    }, 10000);

    const startnum = 212015;
    let endnum = 652250;
    let newstartnum ;
    let pageturn = new pageTurn('js-box',numeral(startnum).format('000000000,0'),numeral(endnum).format('000000000,0'));
    pageturn.pageTurningInit();
    // $.pageTurning('js-box',numeral(startnum).format('0,0'), numeral(endnum).format('0,0'));
    setInterval(function () {
      newstartnum =endnum;
      console.log(newstartnum,"......newstartnum");
      endnum += 176;
      //$.pageTurnUpdate('js-box',numeral(newstartnum).format('0,0'), numeral(endnum).format('0,0'));
      pageturn.pageTurnUpdate(numeral(newstartnum).format('000000000,0'),numeral(endnum).format('000000000,0'))
    },5000)
  }

  getDate(){
   const date =  new Date();
   const year = date.getFullYear();
   const month = date.getMonth()+1;
   const day = date.getDate();
   const hour = date.getHours();
   const mintuets = date.getMinutes();
   const second = date.getSeconds();
   const dateTime = year+"-"+month+"-"+day+"   "+hour+":"+mintuets+":"+second;
   return dateTime;
  }

  render() {
    console.log(this.props.map,"mmmmmmmmmmmmmmmmmmmmmmm");
    var timelineInfo = [
      {
        startDate: '10 Feb. 2014',
        endDate: '3 Jan. 2014',
        items: [
          {
            icon: 'fa fa-envelope',
            iconTheme: 'bg-blue',
            time: ' 12:05',
            header: {
              url: '#',
              title: 'Support Team ',
              content: 'sent you an email'
            },
            body: {
              content: 'Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu weebly balihoo...',
            },
            footer: {
              content: '',
              markup: [
                <a key="1" className="btn btn-primary btn-xs">Read more</a>,
                <a key="2" className="btn btn-danger btn-xs">Delete</a>
              ]
            }
          },
          {
            icon: 'fa fa-user',
            iconTheme: 'bg-aqua',
            time: ' 5 mins ago',
            header: {
              url: '#',
              title: 'Sarah Young ',
              content: 'accepted your friend request'
            }
          },
          {
            icon: 'fa fa-comments',
            iconTheme: 'bg-yellow',
            time: ' 27 mins ago',
            header: {
              url: '#',
              title: 'Jay White ',
              content: 'commented on your post'
            },
            body: {
              content: 'Take me to your leader! Switzerland is small and neutral! We are more like Germany, ambitious and misunderstood!'
            },
            footer: {
              content: '',
              markup: <a className="btn btn-warning btn-flat btn-xs">View comment</a>
            }
          }
        ]
      },{
        items: [
          {
            icon: 'fa fa-camera',
            iconTheme: 'bg-purple',
            time: ' 2 days ago',
            header: {
              url: '#',
              title: 'Mina Lee ',
              content: 'uploaded new photos'
            },
            body: {
              content: '',
              markup: [
                <img key="1" src="http://placehold.it/150x100" alt="..." className="margin" />,
                <img key="2" src="http://placehold.it/150x100" alt="..." className="margin" />,
                <img key="3" src="http://placehold.it/150x100" alt="..." className="margin" />,
                <img key="4" src="http://placehold.it/150x100" alt="..." className="margin" />
              ]
            }
          },
          {
            icon: 'fa fa-video-camera',
            iconTheme: 'bg-maroon',
            time: ' 5 days ago',
            header: {
              url: '#',
              title: 'Mr. Doe ',
              content: 'shared a video'
            },
            body: {
              content: '',
              markup: <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/tMWkeBIohBs" frameBorder="0" allowFullScreen="">
                </iframe>
              </div>
            },
            footer: {
              content: '',
              markup: <a href="#" className="btn btn-xs bg-maroon">See comments</a>
            }
          }
        ]
      }
    ];
    return (
      <div className="body">
        {/*头部*/}
        <div className="header">
          <div className="bg_header">
            <div className="t_title">
              大数据服务平台
            </div>
          </div>
        </div>
        {/*内容区*/}
        <div className="data_content">
          <Row className="data_time">
            <Col span={6} style={{height:'100%'}}>
              <div className='countUpStyle'>
                <Col span={12}><span >数量</span></Col>
                <Col span={12}><CountUp
                  start={this.state.countnum}
                  end={this.props.map.countUpNum?this.props.map.countUpNum:0}
                  duration={2.75}
                  separator=","
                /></Col>
              </div>
            </Col>
            <Col span={6}>
              <div className="js-box box" ></div>
            </Col>
            <Col span={6}>
              <div></div>
            </Col>
            <Col span={6}>
              <div id='clock' ref={(clock)=>{this.clock=clock}}></div>
            </Col>
          </Row>
          <Row className="data_main">
            <Col  span={6} style={{height:'615px'}}>
              <Row  className='Row'>
                {/*左上边框*/}
                <div className="t_line_box" >
                  <i className="l_t_line"></i>
                  <i className="t_l_line"></i>
                  {/*<Timeline timelineInfo={timelineInfo}/>*/}

                </div>
                {/*右上边框*/}
                <div className="t_line_box" >
                  <i className="t_r_line"></i>
                  <i className="r_t_line"></i>
                </div>
                {/*左下边框*/}
                <div className="t_line_box">
                  <i className="l_b_line"></i>
                  <i className="b_l_line"></i>
                </div>
                {/*右下边框*/}
                <div className="t_line_box">
                  <i className="r_b_line"></i>
                  <i className="b_r_line"></i>
                </div>
                <div className="main_title">
                  <img src="../../assets/images/t_1.png" alt=""/>
                    模块一
                </div>
                <div id="chart_1" style={{width:'100%',height:"280px"}}></div>
              </Row>
              <div style={{height:'6%'}}>

              </div>
              <Row  className='Row'>
                {/*左上边框*/}
                <div className="t_line_box" >
                  <i className="l_t_line"></i>
                  <i className="t_l_line"></i>
                </div>
                {/*右上边框*/}
                <div className="t_line_box" >
                  <i className="t_r_line"></i>
                  <i className="r_t_line"></i>
                </div>
                {/*左下边框*/}
                <div className="t_line_box">
                  <i className="l_b_line"></i>
                  <i className="b_l_line"></i>
                </div>
                {/*右下边框*/}
                <div className="t_line_box">
                  <i className="r_b_line"></i>
                  <i className="b_r_line"></i>
                </div>
                <div className="main_title">
                  <img src="../../assets/images/t_1.png" alt=""/>
                  模块二
                </div>
                <div id="chart_2"  style={{width:'100%',height:"280px",padding:"20px"}}>
                  <div className="jsboxz box"></div>
                </div>
              </Row>
            </Col>

            <Col span={12} style={{height:'615px',padding:'0 20px'}}>
              <Row  className='centerRow'>
                {/*左上边框*/}
                <div className="t_line_box" >
                  <i className="l_t_line"></i>
                  <i className="t_l_line"></i>
                </div>
                {/*右上边框*/}
                <div className="t_line_box" >
                  <i className="t_r_line"></i>
                  <i className="r_t_line"></i>
                </div>
                {/*左下边框*/}
                <div className="t_line_box">
                  <i className="l_b_line"></i>
                  <i className="b_l_line"></i>
                </div>
                {/*右下边框*/}
                <div className="t_line_box">
                  <i className="r_b_line"></i>
                  <i className="b_r_line"></i>
                </div>
                <div className="main_title">
                  <img src="../../assets/images/t_1.png" alt=""/>
                  模块三
                </div>
                <div id="chart_1" style={{width:'100%',height:"280px"}}></div>
              </Row>
            </Col>

            <Col  span={6} style={{height:'615px',}}>
              <Row  className='Row'>
                {/*左上边框*/}
                <div className="t_line_box" >
                  <i className="l_t_line"></i>
                  <i className="t_l_line"></i>
                </div>
                {/*右上边框*/}
                <div className="t_line_box" >
                  <i className="t_r_line"></i>
                  <i className="r_t_line"></i>
                </div>
                {/*左下边框*/}
                <div className="t_line_box">
                  <i className="l_b_line"></i>
                  <i className="b_l_line"></i>
                </div>
                {/*右下边框*/}
                <div className="t_line_box">
                  <i className="r_b_line"></i>
                  <i className="b_r_line"></i>
                </div>
                <div className="main_title">
                  <img src="../../assets/images/t_1.png" alt=""/>
                  模块三
                </div>
                <div id="chart_1" style={{width:'100%',height:"280px"}}></div>
              </Row>
              <div style={{height:'6%'}}></div>
              <Row  className='Row'>
                {/*左上边框*/}
                <div className="t_line_box" >
                  <i className="l_t_line"></i>
                  <i className="t_l_line"></i>
                </div>
                {/*右上边框*/}
                <div className="t_line_box" >
                  <i className="t_r_line"></i>
                  <i className="r_t_line"></i>
                </div>
                {/*左下边框*/}
                <div className="t_line_box">
                  <i className="l_b_line"></i>
                  <i className="b_l_line"></i>
                </div>
                {/*右下边框*/}
                <div className="t_line_box">
                  <i className="r_b_line"></i>
                  <i className="b_r_line"></i>
                </div>
                <div className="main_title">
                  <img src="../../assets/images/t_1.png" alt=""/>
                  模块四
                </div>
                <div id="chart_2"  style={{width:'100%',height:"280px"}}></div>
              </Row>
            </Col>
          </Row>
          <Row className="data_bottom">
            <Col  span={8} style={{height:'100%'}}>
              <Row  className='bottomRow'>
                {/*左上边框*/}
                <div className="t_line_box" >
                  <i className="l_t_line"></i>
                  <i className="t_l_line"></i>
                </div>
                {/*右上边框*/}
                <div className="t_line_box" >
                  <i className="t_r_line"></i>
                  <i className="r_t_line"></i>
                </div>
                {/*左下边框*/}
                <div className="t_line_box">
                  <i className="l_b_line"></i>
                  <i className="b_l_line"></i>
                </div>
                {/*右下边框*/}
                <div className="t_line_box">
                  <i className="r_b_line"></i>
                  <i className="b_r_line"></i>
                </div>
                <div className="main_title">
                  <img src="../../assets/images/t_1.png" alt=""/>
                  模块五
                </div>
                <div id="chart_1" style={{width:'100%',height:"280px"}}></div>
              </Row>
            </Col>
            <Col  span={8} style={{height:'100%',padding:'0 20px'}}>
              <Row  className='bottomRow'>
                {/*左上边框*/}
                <div className="t_line_box" >
                  <i className="l_t_line"></i>
                  <i className="t_l_line"></i>
                </div>
                {/*右上边框*/}
                <div className="t_line_box" >
                  <i className="t_r_line"></i>
                  <i className="r_t_line"></i>
                </div>
                {/*左下边框*/}
                <div className="t_line_box">
                  <i className="l_b_line"></i>
                  <i className="b_l_line"></i>
                </div>
                {/*右下边框*/}
                <div className="t_line_box">
                  <i className="r_b_line"></i>
                  <i className="b_r_line"></i>
                </div>
                <div className="main_title">
                  <img src="../../assets/images/t_1.png" alt=""/>
                  模块六
                </div>
                <div id="chart_1" style={{width:'100%',height:"280px"}}></div>
              </Row>
            </Col>
            <Col  span={8} style={{height:'100%'}}>
              <Row  className='bottomRow'>
                {/*左上边框*/}
                <div className="t_line_box" >
                  <i className="l_t_line"></i>
                  <i className="t_l_line"></i>
                </div>
                {/*右上边框*/}
                <div className="t_line_box" >
                  <i className="t_r_line"></i>
                  <i className="r_t_line"></i>
                </div>
                {/*左下边框*/}
                <div className="t_line_box">
                  <i className="l_b_line"></i>
                  <i className="b_l_line"></i>
                </div>
                {/*右下边框*/}
                <div className="t_line_box">
                  <i className="r_b_line"></i>
                  <i className="b_r_line"></i>
                </div>
                <div className="main_title">
                  <img src="../../assets/images/t_1.png" alt=""/>
                  模块七
                </div>
                <div id="chart_1" style={{width:'100%',height:"280px"}}></div>
              </Row>
            </Col>
          </Row>

        </div>
      </div>

    )
  }
}
