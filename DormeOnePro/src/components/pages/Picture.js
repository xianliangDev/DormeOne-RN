import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'

class Picture extends Component {

    render(){
        return(
            <View style= {styles.container}>
                <Text>
                Picture
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

export default Picture