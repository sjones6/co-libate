import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Button from 'react-native-button'

export default class AddNewButton extends Component {

    constructor(props) {
        super(props);

        this._onPress = props.pressed;
    }

    render() {
        return (
            <Button
                containerStyle={styles.container}
                style={styles.button}
                onPress={() => this._onPress()}
            >
                +
            </Button>
        );
    }
}

// Styles
const styles = StyleSheet.create({
    button: {
        color: '#fff',
        fontSize: 20
    },
    container: {
        margin: 20,
        height: 45,
        padding: 15,
        overflow:'hidden',
        borderRadius: 100,
        backgroundColor: '#b3003b'
    }
});
  