import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'

class Music extends Component {

    render(){
        return(
            <View style= {styles.container}>
                <Text>
                Music
                </Text>    
            </View>    
        )
    }

}

const styles = StyleSheet.create(
    {
      container:{
          flex:1,
          backgroundColor:'white',
          alignItems:'center',
        justifyContent:'center'
      }  
    }
)

export default Music