/**
 * Created by joincoder on 18/3/18.
 */
import React,{Component} from  'react'
import {View, StyleSheet, ActivityIndicator} from  'react-native'
import  {Actions} from  'react-native-router-flux'

//设备信息
import  deviceInfo from  '../deviceInfo'

class  ProgressHud extends  Component {
    componentWillReceiveProps(nextProps) {
        if (!nextProps.showHUD){
            Actions.pop({loading:true})
        }
    }
    render(){
        return(
            <View style={styles.maskStyle}>
                <View style={styles.backViewStyle}>
                    <ActivityIndicator size='large' color='white'/>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    maskStyle: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.3)',
        width: deviceInfo.deviceWidth,
        height: deviceInfo.deviceHeigth,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backViewStyle: {
        backgroundColor:'#111',
        width:120,
        height:100,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    }

})

export  default  ProgressHud