import React, { Component } from 'react';
import { 
    Text,
    StyleSheet
} from 'react-native';

export default class WineListItem extends Component {
    render() {
        return (
            <Text
                style={styles.listItem}
                onPress={() => this.props.pressed()}
            >
                {this.props.name} ({this.props.year})
            </Text>
        );
    }
}

// Styles
const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        fontSize: 20
    }
});
  