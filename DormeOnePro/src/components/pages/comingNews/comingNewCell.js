import React,{Component} from 'react'
import {View,StyleSheet,TouchableOpacity,Image,Text} from 'react-native'

import {commonStyles} from '../../../utils/commonStyles'

import {Icon} from '../../../utils/icon'

import deviceInfo from '../../../utils/deviceInfo'

class comingNewCell extends Component {
    render(){
        let data = this.props.rowData
        return(
            <TouchableOpacity style={styles.container}>
                <TouchableOpacity style={styles.movieIcon}>
                    <Image source={{uri:data.image}} style={{width:70,height:90}}>
                    </Image> 
                    <View style={{position:commonStyles.absolute}}>   
                        <Icon name={'oneIcon|play_cycle_o'} size={25} color={commonStyles.white}/> 
                    </View>    
                </TouchableOpacity> 
                <View style={styles.rightContent}>
                   <View style={{flex:1}}>
                        <Text style={{fontSize:16,paddingVertical:6}}>
                       {data.title}
                        </Text> 
                        <Text style={{fontSize:12,color:commonStyles.lightGray,paddingVertical:6,color:'#F9783F'}}>{data.wantedCount}
                        <Text style={{color: commonStyles.textGrayColor, fontSize: 12}}>人想看</Text>
                        <Text style={{color: commonStyles.textGrayColor, fontSize: 12}}>{` - ${data.type}`}</Text> 
                        </Text> 
                        <Text style={{fontSize:12,color:commonStyles.lightGray,paddingVertical:6}}>
                            {`${data.actor1} / ${data.actor2}`}
                        </Text> 
                    </View> 
                   <View style={{justifyContent: 'space-around'}}>
                    {
                        data.isTicket ?
                            <TouchableOpacity style={{borderColor: '#6EA524', borderWidth: 1, borderRadius: 2}}>
                                <Text style={{paddingVertical: 5, paddingHorizontal: 10, color: '#6EA524', fontSize: 13}}>预售</Text>
                            </TouchableOpacity> :
                            <TouchableOpacity style={{borderColor: '#F9783F', borderWidth: 1, borderRadius: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 2, paddingVertical: 4}}>
                               <Icon name={'oneIcon|love_o'} size={15} color={'#F9783F'}/>
                               <Text style={{ color: '#F9783F', fontSize: 13}}>想看</Text>
                            </TouchableOpacity>
                    }
                    </View>       
                </View>       
            </TouchableOpacity>    
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:commonStyles.white,
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:0.5,
        borderBottomColor:commonStyles.lineColor,
        marginLeft:10,
        marginTop:10,
        paddingBottom:10
    },
    movieIcon:{
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:commonStyles.clear
    },
    rightContent:{
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: deviceInfo.deviceWidth - 70 - 50,
        flex: 1
    }

})

export default comingNewCell