import React, { Component } from 'react';
import {
 TouchableOpacity,
  View,
} from 'react-native';

class Button extends Component{
  constructor(props){
      super(props);
  }
  render(){
    return(
      <TouchableOpacity {...this.props}>
        {this.props.children}
      </TouchableOpacity>
    )
  }
}
export default Button;
