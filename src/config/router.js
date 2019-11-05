import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import TodoScreen from '../containers/TodoScreen';
import DoneScreen from '../containers/DoneScreen';

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