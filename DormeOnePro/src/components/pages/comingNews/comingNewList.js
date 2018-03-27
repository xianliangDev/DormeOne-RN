import React,{Component} from 'react'
import {View,StyleSheet,ListView,ScrollView,TouchableOpacity,Image,Text} from 'react-native'

import ComingNewCell from './comingNewCell'
import { commonStyles } from '../../../utils/commonStyles'
import {Icon} from '../../../utils/icon'
import { Actions } from 'react-native-router-flux'

class  comingNewList extends Component {
    constructor(props){
        super(props)
        this.renderRow = this.renderRow.bind(this)
        this.renderHeader = this.renderHeader.bind(this)
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged:(r1,r2) => r1!== r2})
        }
    }
    
    renderRow(rowData,sectioId,rowId){
        return(
            <ComingNewCell key={rowId} rowData={rowData} />
        )
    }
    renderHeader(){
        return(
            <ScrollView style={{height:160,margin:10,marginLeft:0}}
            horizontal={true}
            showsHorizontalScrollIndicator={false} 
            removeClippedSubviews={true} >
            {this.renderAttentionList()}
            </ScrollView>    
        )
    }
    renderAttentionList(){
        return this.props.attentionArr.map((item,index) =>(
            <TouchableOpacity 
            key={index}
            style={{marginLeft:10,width:80}}
            onPress={() => Actions.moviewDetail({id:item.id})} >
                <Image style={{width:80,height:120}} source={{uri: item.image}}/>
                <Text numberOfLines={1} style={{fontSize:14,marginVertical:6,color:commonStyles.textBlockColor,textAlign:'center'}}>{item.title}</Text>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                   <Text style={{fontSize:12,color:commonStyles.textGrayColor}}>{`${item.wantedCount}人想看`}</Text>
                   <Icon name={'oneIcon|love_o'} size={15} color={'#F86728'}/>    
                </View>    
            </TouchableOpacity>
        ))
    }
    render(){
        let dataSource = this.state.dataSource.cloneWithRows(this.props.comingNewArr)
        return(
            <ListView 
            style={styles.content}
            renderHeader={this.renderHeader}
            renderRow={this.renderRow}
            enableEmptySections
            dataSource={dataSource} >
            </ListView>    
        )
    }
}

const styles = StyleSheet.create({
    content:{
        backgroundColor:commonStyles.white
    }
})

export default comingNewList