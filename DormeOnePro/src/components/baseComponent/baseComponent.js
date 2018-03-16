import React,{Component} from 'react'
import{View,StyleSheet} from 'react-native'

/**
 * 自定义的页面基类，react-native 不像iOS那样navigationcontroller设置一次导航所有的堆栈内的导航
 * 都存在了导航栏，如果都每个页面再单独去引入过于麻烦，不如通过基类来设置
 */
class BaseComponent extends Component {
    constructor(props){
        super(props)
        this._render = this._render.bind(this)
        this.onLeftPress = this.onLeftPress.bind(this)
        this.onRightPress = this.onRightPress.bind(this)
    }

    onLeftPress(){
       
    }
    onRightPress(){

    }

    _render(){

    }

    render(){
        <View>
        </View>
    }
}

const styles = StyleSheet.create(
    {

    }
)

export default BaseComponent