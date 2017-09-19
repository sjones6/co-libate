import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import makeName from './utils/makeName'

// Components
import AddTaste from './components/AddTaste'
import TasteList from './components/TasteList'

export default class WineDetail extends Component {
    constructor(props) {
        super(props)

        this.$node = null;
        this.state = {
            name: "",
            year: -1,
            winery: "",
            origin: ""
        }
    }

    componentDidMount() {
        const {year, key, name} = this.props.navigation.state.params;
        if (year > -1) {
            this.$wine = this.$gun.get('years').get(year).get(makeName(name, year))
            let _this = this;
            this.$wine.on(function(node, key, ctx) {
                _this.$node = this;
                _this._updateUI({node, key, ctx})
            })
        } else {
            const { navigate } = this.props.navigation;
            navigate('WineList')
         }
    }


    componentWillUnmount() {
        if (this.$node) {
            this.$node.off();
            this.$node = null;
        }
    }

    _updateUI({ node, key, ctx }) {
        this.setState(node)
    }

    render() {
      
      return (
        <View style={styles.container}>
          <Text
            style={styles.h1}
          >
            {this.state.name} ({this.state.year})
          </Text>
          <Text
            style={styles.p}
          >
            Winery: {this.state.winery}
          </Text>
          <Text
            style={styles.p}
          >
            Origin: {this.state.origin}
          </Text>
          <AddTaste
            name={this.state.name}
            year={this.state.year}
          />
          <TasteList
            name={this.state.name}
            year={this.state.year}
          />
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
        justifyContent: 'flex-start',
        paddingTop: 20
    },
    h1: {
        fontSize: 30,
        color: '#b3003b'
    },
    p: {
        fontSize: 20,
        color: '#000'
    }
});
  