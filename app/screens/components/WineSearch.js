import React, { Component } from 'react';
import {
    TextInput,
    StyleSheet
} from 'react-native';

export default class WineList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: ""
        }
    }

    textChanged(text) {
        this.setState({ text })
    }

    render() {
      return (
        <TextInput
            style={styles.input}
            //onKeyPress={(a, b, c) => console.log({a, b, c})}
            onChangeText={text => this.textChanged(text)}
            placeholder="Search wines ..."
        />
      );
    }
}

// Styles
const styles = StyleSheet.create({
    input: {
      fontFamily: 'Avenir-Book',
      color: '#b3003b',
      fontSize: 25,
      padding: 10,
      borderWidth: 1,
      borderColor: '#b3003b',
      width: 300
    }
});
  