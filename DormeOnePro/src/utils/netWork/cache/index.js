/*
 * @Author: xianliang_wang 
 * @Date: 2018-03-19 13:51:06 
 * @Last Modified by: xianliang_wang
 * @Last Modified time: 2018-03-19 15:52:48
 * cache中获取数据
 */

 import store from 'react-native-simple-store'
 
 const dataCache = (key,fetchFunc,isCache) => {
     if (!isCache) {
        fetchFunc()
     }
     // get updated object
     return store.get(key).then((res) => {
         if (res) {//如果从缓存中获取数据，则返回缓存中的数据
             return res
         } else {//缓存中获取不到数据，则从网络获取数据，并将获取到的数据存放在本地
           return fetchFun().the((res) => {
               res?store.save(key,res):null
               return res
           })
         }
     })
 }

 export {dataCache}