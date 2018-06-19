import React,{Component} from 'react'
import {View,StyleSheet,TextInput,TouchableOpacity,Text} from 'react-native'

import {commonStyles} from '../../../utils/commonStyles'


export default class ActorsList extends Component {
    constructor(props) {  
        super(props);  
        this.state = {  
            value: "",  
            gotText: "",  
        }  
    }  
      
      handleChange(e) {  
        this.setState({  
            value: e.nativeEvent.text  
        })  
      }  
      
      sendAction() {  
        this.setState({  
            gotText: this.state.value  
        })  
      }  
      
      render() {  
        return (  
             <View style={{backgroundColor:'#f4f4f4',flex:1}}>  
                
              <TextInput   
                  style={styles.style_user_input}  
                  placeholder='QQ号/手机号/邮箱'  
                  numberOfLines={1}  
                  autoFocus={true}  
                  underlineColorAndroid={'transparent'}   
                  textAlign='center'  
                  value={this.state.value}   
                  onChange={e => this.handleChange(e)}  
              />  
              <TextInput   
                  style={styles.style_pwd_input}  
                  numberOfLines={1}  
                  autoFocus={true}  
                  underlineColorAndroid={'transparent'}   
                  textAlign='center'  
                  value={this.state.gotText}   
              />  
              <View style={{height:1,backgroundColor:'#f4f4f4'}} />  
      
              <TouchableOpacity  
                  onPress={() => {  
                    this.sendAction();  
                  }}  
                >  
                  <View  style={styles.style_view_commit} >  
                    <Text style={{color:'#fff'}}>  
                      发送  
                    </Text>  
                  </View>  
              </TouchableOpacity>  
      
              <TouchableOpacity  
                  onPress={() => {  
                    this.setState({value:this.state.value + "文字~"});  
                  }}  
                >  
                  <View  style={styles.style_view_commit} >  
                    <Text style={{color:'#fff'}}>  
                      手动加入文字  
                    </Text>  
                  </View>  
              </TouchableOpacity>  
          </View>  
        );  
      }  
}

const styles = StyleSheet.create({
    style_image:{  
        borderRadius:35,  
        height:70,  
        width:70,  
        marginTop:40,  
        alignSelf:'center',  
      },  
      style_user_input:{    
          backgroundColor:'#fff',  
          marginTop:100,  
          height:35,  
      },  
       style_pwd_input:{    
          backgroundColor:'#fff',  
          height:35,  
          marginTop:10,  
      },  
       style_view_commit:{    
          marginTop:15,  
          marginLeft:10,  
          marginRight:10,  
          backgroundColor:'#63B8FF',  
          height:35,  
          borderRadius:5,  
          justifyContent: 'center',  
          alignItems: 'center',  
      },  
    });  