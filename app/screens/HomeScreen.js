import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import Button from 'react-native-button'


export default class HomeScreen extends Component {

    static navigationOptions = {
      title: 'Welcome',
    };

    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Co-Libate
          </Text>
          <Text
          style={styles.sub}>
            Collaborative Wine Tasting
          </Text>
          <Button
            onPress={() => navigate('WineList')}
            containerStyle={styles.enterButtonContainer}
            styles={styles.enterButton}
          >
            Enter
          </Button>
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
    },
    enterButtonContainer: {
      marginTop: 10,
      paddingLeft: 40,
      paddingTop: 10,
      paddingRight: 30,
      paddingLeft: 20,
      height: 45,
      overflow:'hidden',
      borderRadius: 50,
      backgroundColor: 'white'
    },
    enterButton: {
      backgroundColor: '#fff',
      color: '#b3003b'
    }
  });
  