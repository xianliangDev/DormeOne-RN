/**
 * Created by guangqiang on 2017/11/9.
 */
import React, {Component} from 'react'
import {commonStyles} from '../../utils/commonStyles'
import deviceInfo from '../../utils/deviceInfo'
import {View, TouchableOpacity, Text, StyleSheet, Modal, NativeModules} from 'react-native'
import {Icon} from '../../utils/icon'
import {sharePlatform} from '../../constants/commonType'

const ShareModule = NativeModules.shareModule

class ShareModal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isHidden: false
    }
  }

  share(platform) {
    ShareModule.share('OneM','OneM',
      'http://www.jianshu.com/u/023338566ca5','http://ovyjkveav.bkt.clouddn.com/17-11-9/48949929.jpg', sharePlatform[platform],
      (message) => {
        this.props.onVisibleChange && this.props.onVisibleChange(false)
        this.setState({isHidden: true})
      })
  }

  renderItem(icon, title, color, platform) {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => this.share(platform)}
      >
        <Icon name={`oneIcon|${icon}`} color={color} size={30}/>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      !this.state.isHidden || this.props.visible ?
        <Modal
          animationType={'fade'}
          transparent={true}
          visible={this.props.visible}
          onRequestClose={() => this.props.onVisibleChange(false)}>
          <TouchableOpacity
            style={styles.modalStyle}>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.cancle}
              onPress={() => this.props.onVisibleChange && this.props.onVisibleChange(false)}>
              <Text>取消</Text>
            </TouchableOpacity>
            <View style={styles.content}>
              {this.renderItem('weixin_s', '微信', '#49BF6E', 'WECHAT')}
              {this.renderItem('weixin_friend_s', '朋友圈', '#49BF6E', 'WECHATMOMENT')}
              {this.renderItem('qq_s', 'QQ', '#4CC3F0', 'QQ')}
              {this.renderItem('weibo_s','微博', '#CE3238', 'SINA')}
            </View>
          </TouchableOpacity>
        </Modal> : null
    )
  }
}

const styles = StyleSheet.create({
  modalStyle: {
    flex: 1,
    flexDirection: 'column-reverse',
    alignItems: commonStyles.center,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  content: {
    flexDirection: commonStyles.row,
    backgroundColor: commonStyles.white,
    justifyContent: commonStyles.around,
    alignItems: commonStyles.center,
    width: deviceInfo.deviceWidth,
    paddingHorizontal: 20
  },
  item: {
    justifyContent: commonStyles.center,
    alignItems: commonStyles.center,
    marginVertical: 10
  },
  cancle: {
    height: 44,
    justifyContent: commonStyles.center,
    alignItems: commonStyles.center,
    backgroundColor: commonStyles.white,
    width: deviceInfo.deviceWidth,
    borderTopColor: commonStyles.lineColor,
    borderTopWidth: 1
  },
  text: {
    marginTop: 5,
    fontSize: 13,
    color: commonStyles.textBlockColor
  }
})

export {ShareModal}