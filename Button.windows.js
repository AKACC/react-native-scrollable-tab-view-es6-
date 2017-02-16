import React from ’react';

import {
 TouchableOpacity,
  View,
} from 'react-native';

class Button extends Component{
    render(){
        return (
	    <TouchableOpacity {…this.props}>
        		{this.props.children}
 	    </TouchableOpacity>;
        ) 
    }
};

export default Button;
