import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../screen/main/Home';
import Splash from '../screen/auth/Splash';
import Terms from '../screen/auth/Terms';
import LiveChat from '../screen/main/LiveChat';
import Profile from '../screen/main/Profile';
import Login from '../screen/auth/Login';
import Register from '../screen/auth/Register';
import ProfileComplete from '../screen/main/ProfileComplete';
import BottomNavigator from './BottomTabBarNavigator';
import Admins from '../screen/main/Admins';
import InviteFriends from '../screen/main/InviteFriends';
import TermsConditions from '../screen/main/TermsConditions';
import Settings from '../screen/main/Settings';
import Lock from '../screen/main/Lock';
export const navigationContainerRef = React.createRef();
const RouteNavigator = () => {
    const [splashState, setSplashState] = useState(true)
    useEffect(() => {
        let timeState = setTimeout(() => {
            setSplashState(false);
        }, 2000);
        return () => {
            clearTimeout(timeState);
        };
    }, []);
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer
        >
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName='Splash'
            >
                {splashState && <Stack.Screen name="Splash" component={Splash} />}
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="Lock" component={Lock} />
                <Stack.Screen name="TermsConditions" component={TermsConditions} />
                <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
                <Stack.Screen name="Terms" component={Terms} />
                <Stack.Screen name="LiveChat" component={LiveChat} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="ProfileComplete" component={ProfileComplete} />
                <Stack.Screen name="Admins" component={Admins} />
                <Stack.Screen name="InviteFriends" component={InviteFriends} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RouteNavigator
