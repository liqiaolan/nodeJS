 var save={
    install(Vue,params){
     Vue.prototype.save=function (attr,val) {
         sessionStorage[attr]=JSON.stringify(val);
     }
     Vue.prototype.get=function (attr,attr1) {
         if(attr1){
            return  sessionStorage[attr]?JSON.parse(sessionStorage[attr])[attr1]:'';
         }else{
             return sessionStorage[attr];
         }
     }
     Vue.prototype.del=function (attr) {
         sessionStorage.removeItem(attr);
     }
 }

 }