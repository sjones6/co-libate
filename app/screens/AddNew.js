import React, { Component } from 'react';
import {
    TextInput,
    Text,
    View,
    StyleSheet
} from 'react-native';
import Button from 'react-native-button'
import AddNewButton from './components/AddNewButton'
import makeName from './utils/makeName'

export default class WineList extends Component {

    static navigationOptions = {
        title: 'Add New',
    };

    constructor(props) {
        super(props)

        this.$wines = this.$gun.get("wines")
        this.$years = this.$gun.get("years")

        this.state = {
            name: "",
            year: -1,
            winery: "",
            origin: ""
        }
    }

    _navigateToWine() {
        const { navigate } = this.props.navigation;
        navigate('WineDetail', {
            key: makeName(this.state.name, this.state.year),
            name: this.state.name,
            year: this.state.year
        })
    }

    attemptSave() {
        console.log(this.state.name);
        if (
            this.state.name.length
            && this.state.year > -1
            && this.state.winery.length
            && this.state.origin.length
        ) {
            const wine = this.$years.get(this.state.year).get(makeName(this.state.name, this.state.year)).put({
                name: this.state.name,
                year: parseInt(this.state.year),
                winery: this.state.winery,
                origin: this.state.origin
            })
            this.$wines.set(wine)
            this._navigateToWine()
        }
    }

    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
            <Text
                style={styles.header}
            >
                Add New Wine
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Wine *"
                onChangeText={name => this.setState({ name })}
            />
            <TextInput
                style={styles.input}
                placeholder="Year *"
                onChangeText={year => this.setState({ year: parseInt(year) })}
            />
            <TextInput
                style={styles.input}
                placeholder="Winery *"
                onChangeText={winery => this.setState({ winery })}
            />
            <TextInput
                style={styles.input}
                placeholder="Origin *"
                onChangeText={origin => this.setState({ origin })}
            />
            <Button
                containerStyle={styles.saveButtonContainer}
                style={styles.saveButton}
                onPress={() => this.attemptSave()}
            >
                Save!
            </Button>
        </View>
      );
    }
}

// Styles
const styles = StyleSheet.create({
    header: {
        color: '#b3003b',
        fontSize: 40,
        marginTop: 5,
        marginBottom: 15
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },    
    input: {
        fontFamily: 'Avenir-Book',
        color: '#b3003b',
        fontSize: 25,
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#b3003b',
        width: 300
    },
    saveButtonContainer: {
        width: 200,
        padding: 15,
        overflow:'hidden',
        backgroundColor: '#b3003b'
    },
    saveButton: {
        color: '#fff'
    }
});
