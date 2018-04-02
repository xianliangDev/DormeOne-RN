import React,{Component} from 'react'
import {View,StyleSheet,ScrollView,findNodeHandle,Image,TouchableOpacity,Text} from 'react-native'
import {VibrancyView} from 'react-native-blur'

import {Actions} from 'react-native-router-flux'

import {Icon}  from '../../../utils/icon'
import {commonStyles} from '../../../utils/commonStyles'
import deviceInfo from '../../../utils/deviceInfo'

class MovieDetail  extends Component {
    constructor(props){
        super(props)
        this.navBar = null
        this.state = {
            viewRef: null,
            modalVisible:false
        }
    }
    componentDidMount(){
       
        this.props.getMovieDetail({movieId:this.props.id}).then((response) => {
            console.log('aaaa---' + response)
        })
       
    }
    _onScroll(event) {
       let y = event.nativeEvent.contentOffeset.y
       let opacityPercent = y/64
       if (y < 64) {
           this.navBar.setNativeProps({
              style: {opacity:opacityPercent}
           })
       } else {
           this.navBar.setNativeProps({
               style:{opacity:1}
           })
       }
    }
    imageLoaded(){
        this.setState({
            viewRef: findNodeHandle(this.backgroudImage)
        })
    }
    renderContent(){
       
        let data = this.props.movieDetail
        let basic = data.basic
        return (
                <View style = {styles.container}>
                    <ScrollView
                     onScroll={()=>this._onScroll.bind(this)} 
                     scrollEventThrottle={20}
                     bounces={false} >
                        <Image
                        ref={(img) => {this.backgroudImage = img}} 
                        style={styles.bgContainer}
                        source={{uri: basic.img}} 
                        resizeMode='stretch'
                        onLoadEnd={() => this.imageLoaded()} >
                        </Image>
                        <View style={styles.bgContainer}>
                            <VibrancyView
                            blurType={'light'}
                            blurAmount={10}
                            style={[styles.container,styles.bgContainer]}
                            />
                        </View >
                        <View style={styles.contentStyle}>
                            <View style={styles.headerStyle}>
                                <TouchableOpacity style={{backgroundColor:commonStyles.clear,
                                justifyContent:'center',
                                alignItems:'center',
                                     }}>
                                    <Image style={{width:100,height:150}}
                                    source={{uri:basic.img}}
                                    resizeMode='contain'>
                                    </Image>
                                    <View style={{position:commonStyles.absolute}}> 
                                        <Icon name={'oneIcon|play_cycle_o'} size={25} color={commonStyles.white}></Icon>   
                                    </View>    
                                </TouchableOpacity>    
                            </View>    
                        </View>    
                    </ScrollView>  
                    {/* 顶部导航栏 */}
                    <View style={[styles.navBarStyle,{backgroundColor:commonStyles.clear}]}>
                        <View style={styles.navCommentStyle}>
                            <TouchableOpacity onPress={() => Actions.pop()}>
                                <Icon name={'oneIcon|nav_back_o'} size={20} color={commonStyles.white}></Icon>
                            </TouchableOpacity>    
                            <Text style={{fontSize:17,color:commonStyles.white}}>{basic.name}</Text>
                            <TouchableOpacity style={{marginRight:10}} onPress={() => this.setState({modalVisible:true})}>
                                <Icon name={'oneIcon|share_o'} size={20} color={commonStyles.white}></Icon>
                            </TouchableOpacity>    
                        </View>
                        <View>
                        </View>        
                    </View>    
                </View>
            )
    }

    render(){
        let data = this.props.movieDetail
        let basic = data.basic
        return (
           basic?this.renderContent():<View/>
        )
    }
}

const styles = StyleSheet.create(
    {
        container:{
            backgroundColor:'transparent',
            flex:1
        },
        bgContainer: {
            position:'absolute',
            height:120,
            width:deviceInfo.deviceWidth
        },
        vibrancy:{
            width:deviceInfo.deviceWidth,
            height:100,
        },
        navBarStyle:{
            height:64,
            backgroundColor:'#161C28',
            position:'absolute',
            width:deviceInfo.deviceWidth
        },
        navCommentStyle:{
            height:44,
            marginTop:20,
            flexDirection:'row',
            alignItems:'center',
            paddingHorizontal:10,
            justifyContent:'space-between'
        },
        contentStyle:{
            marginTop:120,
            flex:1,
            backgroundColor:commonStyles.white
        },
        headerStyle:{
            marginTop: 0,
            height:100,
            flexDirection: 'row',
            paddingHorizontal: 10,
            paddingBottom:10,
        }

    }
)

export default MovieDetail
