import { StackNavigator } from 'react-navigation'

// Wire up Gun
import gun from './GunLoader';

// Screens
import HomeScreen from './screens/HomeScreen'
import WineList from './screens/WineList'

// Register Navigation
const CoLibate = StackNavigator({
    Home: {
        screen: HomeScreen
    },
    WineList: {
        screen: WineList
    }
})

export default CoLibate