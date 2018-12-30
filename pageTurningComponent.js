/**
 * @author :liuguoxiong
 * @description:
 * @date: Create int 11:43 2018-12-07
 * @modified by:
 *
 */
import $, { jQuery } from 'jquery'

function pageTurn(divClass,startNum,endNum){
  this.divClass = divClass;
  this.startNum = startNum;
  this.endNum = endNum;

}
//字符串转换成数组
function number (startNum){
  var num_arr = startNum.toString().split("");
  return  num_arr;
};
// 生成列表
function dom (divClass,startNumArr){
  var str = '';
  for(var i = 0;i<startNumArr.length;i++){
    const id = divClass+i;
    if(parseInt(startNumArr[i])>=0){
      str += '<div class="l js-l-box digit-container" id="' + id + '" data-show='+startNumArr[i]+'>\
                  <span>0</span>\
                  <span>1</span>\
                  <span>2</span>\
                  <span>3</span>\
                  <span>4</span>\
                  <span>5</span>\
                  <span>6</span>\
                  <span>7</span>\
                  <span>8</span>\
                  <span>9</span>\
                </div>';
    }else{
      str += '<div class="sign-box l"><span>'+startNumArr[i]+'</span></div>';
    }
  }
  return str;
};


pageTurn.prototype.pageTurningInit=function(){

  const div = this.divClass;
  var divCls ="."+div;
  var height = $(divCls).height();
  const arr = number(this.startNum);
  console.log(dom(this.divClass,arr),"....是不是数组");
  $(divCls).html(dom(this.divClass,arr));
  for(var i=arr.length-1;i>=0;i--){
    //console.log(i,"数组大小");
    var id = "#"+div+i;
    var data = $(id).data("show");
    if(data!==undefined){
      var num = parseInt(data);
      var scrollTop = height*num;
      $(id).css("margin-top",0);
      $(id).animate({marginTop: -scrollTop},5);
    }
    else{
      //console.log(id)
    }
  }
}

pageTurn.prototype.pageTurnUpdate=function(newStartNum,endNum){
  const div = this.divClass;
  var divCls ="."+div;
  var height = $(divCls).height();
  const arr = number(newStartNum);
  const maxArr =number(endNum);

  for(var i=arr.length-1;i>=0;i--){
    //console.log(i,"数组大小");
    var id ="#"+div+i;
    var data = arr[i];
    if(data!==undefined){
      var num = parseInt(data);
      const maxnum =  parseInt(maxArr[i]);
      const sl = maxnum-num;
      if(sl>0){
        if(num+1<10){
          var scrollTop = height*num+height*sl;
          $(id).animate({marginTop: -scrollTop},1500);
        }
        else {
          $(id).css("margin-top",0);
          $(id).animate({marginTop: 0},1500);
        }
      }
      else if(sl<0) {
        var scrollTop = height*num+height*sl;
        $(id).animate({marginTop: -scrollTop},1500);
      }
    }
    else{
      //console.log(id)
    }
  }


}

export default pageTurn;
