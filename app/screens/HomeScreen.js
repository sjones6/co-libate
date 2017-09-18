import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';


export default class HomeScreen extends Component {

    static navigationOptions = {
      title: 'Welcome',
    };

    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
          <Text
          style={styles.welcome}
          onPress={() => navigate('WineList')}>
            Co-Libate
          </Text>
          <Text
          style={styles.sub}>
            Collaborative Wine Tasting
          </Text>
        </View>
      );
    }
}

// Styles
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b3003b',
      alignItems: 'center',
      justifyContent: 'center'
    },
    welcome: {
      fontFamily: 'Avenir-Book',
      color: '#fff',
      fontSize: 40,
      margin: 10,
    },
    sub: {
      fontFamily: 'Avenir-Book',
      color: '#fff',
      fontSize: 20,
      margin: 10,
    }
  });
  