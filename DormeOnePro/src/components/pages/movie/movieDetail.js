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

    renderStory(array){
        return (
            array.map((item,index) => 
                     <Text key={index} style={{fontSize:13,marginTop:3,color:commonStyles.textBlockColor}}>{item}</Text> )
        )
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
                                <View style={styles.rightContentStyle}>  
                                            <Text style={{color:commonStyles.white,fontSize:16,
                                            marginVertical:5 }}>{basic.name}</Text>
                                            <Text style={{color:commonStyles.white,fontSize: 13, marginBottom: 8}}>{basic.nameEn}</Text>
                                            <View style={{flexDirection:'row'}}>
                                            {
                                                this.renderStory(basic.type)
                                            }
                                            </View>    
                                            <Text style={{color:commonStyles.textBlockColor,fontSize:13,
                                            marginTop:5 }}>{`${basic.releaseDate}-${basic.releaseArea}`}</Text>
                                            <View style={styles.textReleaseAreatextReleaseArea}>
                                                <Text style={{paddingHorizontal: 5, paddingVertical: 2, color: '#64788E', fontSize: 10}}>{`${basic.releaseArea}巨制`}</Text>
                                            </View>    
                                </View>    
                                <View style={{width: 40, marginTop: 30}}>
                                            <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#588F03', height: 40}}>
                                                <Text style={{fontSize: 15, color: commonStyles.white}}>{basic.overallRating}</Text>
                                            </View>
                                </View>  
                            </View>
                            <View style={styles.storyContentStyle}>    
                                <Text style={{fontSize:16,color:commonStyles.textBlockColor,lineHeight:20,padding:10}}>{`剧情：${basic.story}`}</Text>
                            </View> 
                            <View style={{backgroundColor:commonStyles.white,width:deviceInfo.deviceWidth,
                            height:180,flexDirection:'row' }}>   
                                <TouchableOpacity style={{flexDirection:'column',alignItems:'flex-start',paddingLeft:20,flex:4}}>
                                    <Text style={{paddingTop:10,paddingBottom:10, lineHeight:20}}>导演</Text>
                                    <Image
                                    style={{width:80,height:100,marginBottom:10}}
                                    source={{uri:basic.director.img}} />
                                    <Text>{basic.director.name}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{flex:1}}>  
                                    <Text style={{paddingTop:10,fontSize:16}}>全部 》</Text>  
                                </TouchableOpacity>    
                            </View>
                            <View style={styles.actorsContentStyle}>
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
                        <View >
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
            marginTop:0,
            marginBottom:20,
            height:100,
            flexDirection: 'row',
            paddingHorizontal: 10,
            paddingBottom:10,
        },
        rightContentStyle: {
            marginLeft:10,
            flex:1,
            backgroundColor:commonStyles.clear,
            marginTop:-25,
        },
        headerContentViewStyle:{
           flexDirection:'column' ,
           alignItems:'flex-start',
           justifyContent:'center'
        },
        textReleaseArea:{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
            borderWidth: 0.5,
            marginRight: 10,
            borderColor: '#64788E'
        },
        storyContentStyle:{
            marginTop:10,
            borderTopWidth:10,
            borderTopColor:commonStyles.lineColor,
            borderBottomWidth:10,
            borderBottomColor:commonStyles.lineColor,
            backgroundColor:commonStyles.white
        },
        // 导演列表
        //演员列表
        actorsContentStyle:{
            marginTop:10,
            backgroundColor:commonStyles.white,
            borderTopColor:commonStyles.lineColor,
            borderTopWidth:10,
            height:100
        }

    }
)

export default MovieDetail
