import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import TodoScreen from './TodoScreen';
import DoneScreen from './DoneScreen';

const MainNavigator = createStackNavigator(
    {
        TodoScreen,
        DoneScreen
    },
    {
        initialRouteName: 'TodoScreen',
        headerMode: 'none'
    }
)

export default createAppContainer(MainNavigator)