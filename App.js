import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen'
import ListScreen from './src/screens/ListScreen'
import ImageScreen from './src/screens/ImageScreen'
import CounterScreen from './src/screens/CounterScreen'
import ColorScreen from './src/screens/ColorScreen'
const navigator = createStackNavigator(
  {
    Home:HomeScreen,
    Component:ComponentScreen,
    List:ListScreen,
    Image:ImageScreen,
    Counter:CounterScreen,
    Color:ColorScreen
  },
  {
  initialRouteName: 'Home',
  defaultNavigationOptions:{
    title:'MyApp'
    }
  }
)
export default createAppContainer(navigator)