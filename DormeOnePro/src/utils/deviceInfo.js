/**
 * Created by joincoder on 18/3/18.
 */
import {Dimensions, Platform,PlatformOS} from  'react-native'
export default deviceInfo = {
    //设备宽度
    deviceWidth: Dimensions.get('window').width,
    //设备高度
    deviceHeigth: Dimensions.get('window').height,
    //设备系统
    deviceOS:PlatformOS,
    //当前config:debug\release
    mode: __DEV__?'xdebug' : 'release'
}