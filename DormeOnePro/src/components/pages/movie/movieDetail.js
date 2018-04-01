import React,{Component} from 'react'
import {View,StyleSheet,ScrollView,findNodeHandle,Image} from 'react-native'
import {VibrancyView} from 'react-native-blur'

import {Actions} from 'react-native-router-flux'

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
        console.log('aaaa---' + basic.img)
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
                    </ScrollView>    
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
            backgroundColor:'#fff',
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
        }
    }
)

export default MovieDetail
