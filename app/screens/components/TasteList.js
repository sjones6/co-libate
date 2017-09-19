import React, { Component } from 'react';
import { 
    Text,
    FlatList,
    StyleSheet
 } from 'react-native';
import Button from 'react-native-button'
import makeName from './../utils/makeName'

export default class TasteList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tastes: []
        }
        this.tastes = {}
        this.$wine = this.$gun.get('years').get(this.props.year).get(makeName(this.props.name, this.props.year))
    }

    componentDidMount() {
        this.$wine.get('tastes').map().on((node, key) => {
            this.tastes[key] = node;
            this.setState({
                tastes: Object.keys(this.tastes).map(tasteName => {
                    return {
                        key: tasteName,
                        name: tasteName
                    }
                })
            })
        })
    }

    render() {
        return (
            <FlatList
                data={this.state.tastes}
                extraData={this.state}
                renderItem={({item}) => <Text style={styles.taste} >{item.name}</Text>}
            />
        );
    }
}

// Styles
const styles = StyleSheet.create({
    taste: {
        color: '#b3003b',
        fontSize: 25
    }
});
  