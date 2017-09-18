import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

// Components
import WineSearch from './components/WineSearch';

export default class WineList extends Component {  
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
          <Text
            style={styles.welcome}
          >
            Wines
          </Text>
          <WineSearch />
        </View>
      );
    }
}

// Styles
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    welcome: {
      fontFamily: 'Avenir-Book',
      color: '#b3003b',
      fontSize: 40,
      margin: 10
    }
  });
  