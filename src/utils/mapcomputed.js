export default class ComputedMap{
   constructor(UseMap){
    this.UseMap=UseMap
   }
   //
   convertData(dname){
      var kvArray=[]
        for(let key of Object.keys(this.UseMap)){
           switch(dname){
            case 'lanzhou':
             kvArray.push(this.getMapColor(key,this.UseMap[key].slice(0,2),(this.UseMap[key])[this.UseMap[key].length-1]))
             default:
             if(this.UseMap[key].includes(dname)) kvArray.push(this.getMapColor(key,this.UseMap[key].slice(0,2),(this.UseMap[key])[this.UseMap[key].length-1]))
           }
        }
      return kvArray
   }
   // 根据地图名称（汉字）获取英文地区名称
   getMapName(csmc){
      for(let key of Object.keys(this.UseMap)){
          if(this.UseMap[key].includes(csmc)) return (this.UseMap[key])[this.UseMap[key].length-2]
      }
      return ''
   }

   getMapColor(key,value,ncount){
      let showclor=''
      let showsize=5
      if(ncount>0 && ncount<600){showclor='#5fe3f5';showsize=4 }
      else if(ncount>600 && ncount<1000) {showclor='yellow';showsize=10}
      else if(ncount>1000 && ncount<2000) {showclor='red';showsize=20}
      else{
        showclor='#5fe3f5';showsize=10
      }
      return {name:key,value:value,symbolSize:showsize,itemStyle:{normal:{color:showclor}}}

   }
}
