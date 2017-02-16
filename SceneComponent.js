import React, {Component, }from 'react';
import {View, StyleSheet, } from 'react-native';

import StaticContainer from 'react-native/Libraries/Components/StaticContainer';

export default class SceneComponent extends Component{
    constructor(props){
      super(props);
    }

    render(){
      const {shouldUpdated, ...props, } = this.props;
      return (
          <View {...props}>
            <StaticContainer shouldUpdate={shouldUpdated}>
              {props.children}
            </StaticContainer>
          </View>
      )
    }
}
