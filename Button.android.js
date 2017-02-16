import React, { Component } from ’react';
import {
  TouchableNativeFeedback,
  View,
} from ’react-native';

class Button extends Component{ 
    constructor(props){
      super(props);
    }
    render(){
        return(
	    <TouchableNativeFeedback
   		 delayPressIn={0}
    		background={TouchableNativeFeedback.SelectableBackground()} // eslint-disable-line new-cap
    		{…this.props}
  	    >
    		{this.props.children}
 	 </TouchableNativeFeedback>
	)
    }
};

export default Button;

