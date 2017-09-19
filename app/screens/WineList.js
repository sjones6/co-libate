import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    StyleSheet
} from 'react-native';
import AddNewButton from './components/AddNewButton'

// Components
import WineListItem from './components/WineListItem'
import WineSearch from './components/WineSearch'

export default class WineList extends Component {
  
    static navigationOptions = {
      title: 'Wine List',
    };

    constructor(props) {
      super(props)

      this.$list = this.$gun.get('wines')

      this.state = {
        wines: [],
        wineObj: {}
      }

      this.wines = {}
    }

    componentDidMount() {
      this.$list.map().on((wine, key) => {
        this.wines[key] = wine
        let wines = Object.keys(this.wines).map(name => ({
          key: name,
          name: this.wines[name].name,
          year: this.wines[name].year
        }))
        this.setState({wines})
      })
    }

    _renderListItem(wine) {
      return <WineListItem 
        name={wine.name}
        year={wine.year}
        key={wine.key}
        pressed={() => this._navigateToItem(wine)}
      />
    }
  
    _navigateToItem(wine) {
      const { navigate } = this.props.navigation;
      navigate('WineDetail', wine)
    }

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
          <FlatList
            data={this.state.wines}
            extraData={this.state}
            renderItem={({item}) => this._renderListItem(item)}
          />
          <AddNewButton 
            pressed={() => navigate('AddNew')}
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
      justifyContent: 'flex-start'
    },
    welcome: {
      fontFamily: 'Avenir-Book',
      color: '#b3003b',
      fontSize: 40,
      margin: 10
    }
  });
  