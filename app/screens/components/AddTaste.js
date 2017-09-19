import React, { Component } from 'react';
import { 
    View,
    TextInput,
    StyleSheet
 } from 'react-native';
import Button from 'react-native-button'
import makeName from './../utils/makeName'

export default class AddTaste extends Component {

    constructor(props) {
        super(props);

        this.state = {
            taste: ""
        }

        this.$wine = this.$gun.get('years').get(this.props.year).get(makeName(this.props.name, this.props.year))
        this.$tastes = this.$gun.get('tastes')
    }

    _addTaste() {
        if (this.state.taste.length) {
            const name = this.state.taste.toLowerCase()
            const $foreignTaste = this.$tastes.get(name).put({ name })
            const $localTaste = this.$wine.get('tastes').get(name)
            
            $localTaste.get('ref').put($foreignTaste)

            this.$tastes.map().on(console.log)

            // Reset input
            this.setState({taste: ""})
        }
    }

    render() {
        return (
            <View
                style={styles.container}
            >
                <TextInput
                  style={styles.input}
                  placeholder="Add new taste ..."
                  value={this.state.taste}
                  onChangeText={taste => this.setState({taste})}
                />
                <Button
                    containerStyle={styles.buttonContainer}
                    style={styles.button}
                    onPress={() => this._addTaste()}
                >
                    Add
                </Button>
            </View>
        );
    }
}

// Styles
const styles = StyleSheet.create({
    container: {
        marginTop: 15
    },
    input: {
        fontFamily: 'Avenir-Book',
        color: '#b3003b',
        fontSize: 25,
        padding: 10,
        borderWidth: 1,
        borderColor: '#b3003b',
        width: 200
    },
    button: {
        color: '#fff',
        fontSize: 20
    },
    buttonContainer: {
        margin: 20,
        height: 45,
        padding: 15,
        overflow:'hidden',
        borderRadius: 5,
        backgroundColor: '#b3003b'
    }
});
  