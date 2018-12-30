/**
 * @author :liuguoxiong
 * @description:
 * @date: Create int 9:20 2018-12-07
 * @modified by:
 *
 */
import $, { jQuery } from 'jquery'

$.extend({
  pageTurning:function (divClass,startNum,endNum) {
    var $class = "."+divClass;
    var Event = {
      // 例 510,085.00
      number: function(digit){
        var num_arr=[];
        for(var i = 0;i<digit.length;i++){
          num_arr.push(digit.charAt(i));
        }
        return num_arr;
      },
      dom: function(arr){
        var str = '';
        for(var i = 0;i<arr.length;i++){
          const id = divClass+i;
          if(parseInt(arr[i])>=0){
            str += '<div class="l js-l-box digit-container" id="' + id + '" data-show='+arr[i]+'>\
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
            str += '<div class="sign-box l"><span>'+arr[i]+'</span></div>';
          }
        }
        return str;
      },
      animation: function(arr){
        var height = $($class).height();
        // $(".js-l-box").each(function(i){
        //   var num = parseInt($(this).data("show"));
        //   var scrollTop = height * num;
        //   $(this).css("margin-top",0);
        //   $(this).animate({marginTop: -scrollTop},5);
        // });
        for(var i=arr.length-1;i>=0;i--){
          //console.log(i,"数组大小");
          var id = "#"+divClass+i;
          console.log(id,"............id...........");
          var data = $(id).data("show");
          console.log($(id).html());
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
      },
      animationIncreate:function (arr,maxArr) {
        var height = $($class).height();
        for(var i=arr.length-1;i>=0;i--){
          //console.log(i,"数组大小");
          var id ="#"+divClass+i;
          var data = $(id).data("show");
          if(data!==undefined){
            var num = parseInt(data);
            const maxnum =  parseInt(maxArr[i]);
            const sl = maxnum-num;
            if(sl>0){
              if(num+1<10){
                //currentArr[i]=num+1
                var scrollTop = height*num+height*sl;
                $(id).css("margin-top",0);
                $(id).animate({marginTop: -scrollTop},1500);
              }
              else {
                //currentArr[i]=0
                $(id).css("margin-top",0);
                $(id).animate({marginTop: 0},1500);
              }
            }
            else if(sl<0) {
              var scrollTop = height*num+height*sl;
              $(id).css("margin-top",0);
              $(id).animate({marginTop: -scrollTop},1500);
            }
          }
          else{
            //console.log(id)
          }
        }
      }
    };
    var final_arr = Event.number(startNum);
    //var maxArr = Event.number(endNum);
    $($class).html(Event.dom(final_arr));
    Event.animation(final_arr);
    //Event.animationIncreate(final_arr,maxArr);
  },

  // pageTurnUpdate:function (divClass,startNum,endNum) {
  //   var $class = "."+divClass;
  //   var Event = {
  //     // 例 510,085.00
  //     number: function(digit){
  //       var num_arr=[];
  //       for(var i = 0;i<digit.length;i++){
  //         num_arr.push(digit.charAt(i));
  //       }
  //       return num_arr;
  //     },
  //     animationIncreate:function (arr,maxArr) {
  //       var height = $($class).height();
  //       for(var i=arr.length-1;i>=0;i--){
  //         //console.log(i,"数组大小");
  //         var id ="#"+divClass+i;
  //         var data = $(id).data("show");
  //         if(data!==undefined){
  //           var num = parseInt(data);
  //           const maxnum =  parseInt(maxArr[i]);
  //           const sl = maxnum-num;
  //           if(sl>0){
  //             if(num+1<10){
  //               //currentArr[i]=num+1
  //               var scrollTop = height*num+height*sl;
  //               $(id).css("margin-top",0);
  //               $(id).animate({marginTop: -scrollTop},1500);
  //             }
  //             else {
  //               //currentArr[i]=0
  //               $(id).css("margin-top",0);
  //               $(id).animate({marginTop: 0},1500);
  //             }
  //           }
  //           else if(sl<0) {
  //             var scrollTop = height*num+height*sl;
  //             $(id).css("margin-top",0);
  //             $(id).animate({marginTop: -scrollTop},1500);
  //           }
  //         }
  //         else{
  //           //console.log(id)
  //         }
  //       }
  //     }
  //   };
  //   var final_arr = Event.number(startNum);
  //   console.log(final_arr,".....final_arr");
  //   var maxArr = Event.number(endNum);
  //   Event.animationIncreate(final_arr,maxArr);
  // }

  pageTurnUpdate:function (divClass,startNum,endNum) {
    var $class = "."+divClass;
    var Event = {
      // 例 510,085.00
      number: function(digit){
        var num_arr=[];
        for(var i = 0;i<digit.length;i++){
          num_arr.push(digit.charAt(i));
        }
        return num_arr;
      },
      animationIncreate:function (arr,maxArr) {
        var height = $($class).height();
        for(var i=arr.length-1;i>=0;i--){
          //console.log(i,"数组大小");
          var id ="#"+divClass+i;
          var data = arr[i];
          if(data!==undefined){
            var num = parseInt(data);
            const maxnum =  parseInt(maxArr[i]);
            const sl = maxnum-num;
            if(sl>0){
              if(num+1<10){
                //currentArr[i]=num+1
                var scrollTop = height*num+height*sl;
                //$(id).css("margin-top",0);
                $(id).animate({marginTop: -scrollTop},1500);
              }
              else {
                //currentArr[i]=0
                $(id).css("margin-top",0);
                $(id).animate({marginTop: 0},1500);
              }
            }
            else if(sl<0) {
              var scrollTop = height*num+height*sl;
              //$(id).css("margin-top",0);
              $(id).animate({marginTop: -scrollTop},1500);
            }
          }
          else{
            //console.log(id)
          }
        }
      }
    };
    var final_arr = Event.number(startNum);
    console.log(final_arr,".....final_arr");
    var maxArr = Event.number(endNum);
    Event.animationIncreate(final_arr,maxArr);
  }

})

// 闭包
function aa() {
  function bb() {
    const bbb = 111;
    document.write(aaa);
  }
  var aaa = 120;
  return bb;
}
var demo = aa();
demo();

//闭包
function cc() {
  var num = 99;
  function dd() {
    num++;
    console.log(num)
  }
  return dd;
}

var xx = cc();
xx();//100
xx();//101


// 闭包用作缓存数据
function eater() {
  var food=""; //暂存数据
  var obj = {
    push:function (myfood) {
      food = myfood
    },
    eating:function () {
      console.log("I am eating " + food);
    }
  }
  return obj;
}
const eat = eater();
eat.push("apple");
eat.eating();

// 这样还可以
function alibaba(a,b) {
  console.log(a+b);
}(1,2)



function  test11() {
  var arr=[];
  for (var i=0;i<10;i++){
    arr[i]=function () {
      document.write(i+"  jkjk");
    }
  }
  return arr;
}

var test22 =test11();
for (var j=0;j<10;j++){
  test22[j]();      //应该输出的都是10
}



function Car(name,height) {
  this.name =name;
  this.height = height;
}

// 字符串常量和字符串对象
var str = "abc";
str+=1;
var test = typeof (str);
if(test.length===6){
  test.sign = "typeof 返回的结果可能是string"
}
//new String(test).sign 没啥用
console.log(test.sign);// 输出undefined

