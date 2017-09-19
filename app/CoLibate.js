import { StackNavigator } from 'react-navigation'

// Wire up Gun
import gun from './GunLoader';

// Screens
import HomeScreen from './screens/HomeScreen'
import WineList from './screens/WineList'
import AddNew from './screens/AddNew'
import WineDetail from './screens/WineDetail'

// Register Navigation
const CoLibate = StackNavigator({
    Home: {
        screen: HomeScreen
    },
    WineList: {
        screen: WineList
    },
    AddNew: {
        screen: AddNew
    },
    WineDetail: {
        screen: WineDetail
    }
})

export default CoLibate