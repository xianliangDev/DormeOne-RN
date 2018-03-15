/*
 * @Author: xianliang_wang 
 * @Date: 2018-03-14 15:28:31 
 * @Last Modified by: xianliang_wang
 * @Last Modified time: 2018-03-14 16:22:37
 */

import React,{Component} from 'react'
import {StyleSheet,View} from 'react-native'
import {commonStyles} from '../utils/commonStyles'

export default class  TabbarController extends Component {
    //js 构造方法
    constructor(props){
        //注意: 在派生类中, 必须先调用 super() ， 类本身没有this 对象的 只有调用父类的构造方法后 才创建this 实例
        // 忽略这个，将会导致一个引用错误。
        super(props)
        this.state ={
            selectedTab:'Movie'
        }
    }
    render(){
        <View style={styles.container}>
        </View>    
    }
} 

const styles = StyleSheet.create({
  container:{
      flex:1,

  }
}
)