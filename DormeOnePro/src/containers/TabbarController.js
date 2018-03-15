/*
 * @Author: xianliang_wang 
 * @Date: 2018-03-14 15:28:31 
 * @Last Modified by: xianliang_wang
 * @Last Modified time: 2018-03-15 17:26:52
 */

import React,{Component} from 'react'
import {StyleSheet,View} from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import {commonStyles} from '../utils/commonStyles'
import {Icon} from '../utils/icon'

//pages
import Movie from '../components/pages/Movie'
import Me from '../components/pages/Me'
import Music from '../components/pages/Music'
import Read from '../components/pages/Read'
import Picture from '../components/pages/Picture'

export default class  MainPage extends Component {
    //js 构造方法
    constructor(props){
        //注意: 在派生类中, 必须先调用 super() ， 类本身没有this 对象的 只有调用父类的构造方法后 才创建this 实例
        // 忽略这个，将会导致一个引用错误。
        super(props)
        this.state = {
            selectedTab:'Movie'
        }
    }
    render(){
        return(
        <View style={styles.container}>
            <TabNavigator>
            <TabNavigator.Item
            selected={this.state.selectedTab === 'Movie'}
            title="电影"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Icon name={'oneIcon|tb_Movie_o'} size={20} color='black'/>}
            renderSelectedIcon={() => <Icon name={'oneIcon|tb_Movie_o'} size={20} color='black'/>}
            onPress={() => this.setState({ selectedTab: 'Movie' })}>
            <Movie/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Music'}
            title="音乐"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Icon name={'oneIcon|tb_Music_o'} size={20} color='black'/>}
            renderSelectedIcon={() => <Icon name={'oneIcon|tb_Music_o'} size={20} color='black'/>}
            onPress={() => this.setState({ selectedTab: 'Music' })}>
            <Music/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Picture'}
            title="图文"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Icon name={'oneIcon|tb_Picture_o'} size={22} color='black'/>}
            renderSelectedIcon={() => <Icon name={'oneIcon|tb_Picture_o'} size={22} color='black'/>}
            onPress={() => this.setState({ selectedTab: 'Picture' })}>
            <Picture/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Reading'}
            title="阅读"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Icon name={'oneIcon|tb_article_o'} size={20} color='black'/>}
            renderSelectedIcon={() => <Icon name={'oneIcon|tb_article_o'} size={20} color='black'/>}
            onPress={() => this.setState({ selectedTab: 'Reading' })}>
            <Read/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Me'}
            title="我的"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Icon name={'oneIcon|tb_mine_o'} size={20} color='black'/>}
            renderSelectedIcon={() => <Icon name={'oneIcon|tb_mine_o'} size={20} color='black'/>}
            onPress={() => this.setState({ selectedTab: 'Me' })}>
            <Me/>
          </TabNavigator.Item>
            </TabNavigator>    
        </View>  
        )  
    }
} 

const styles = StyleSheet.create({
  container:{
      flex:1,
  },
  tabText: {
    fontSize: 11,
    color: commonStyles.textGrayColor,
    marginBottom: 5
  },
  selectedTabText: {
    fontSize: 11,
    color: commonStyles.black,
    marginBottom: 5
  }
}
)