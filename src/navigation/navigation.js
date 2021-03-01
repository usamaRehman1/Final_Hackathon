import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SplashScreen, UserPicker, Home, SingIn, SingUp , SingalCard , Account, AllCompanies , AllStudents, AdminePage} from '../component/'
import Ionicons from 'react-native-vector-icons/Ionicons'

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator>
                <MainStack.Screen name="SplashScreen" component={SplashScreen}  options={{ headerShown: false }}/>
                <MainStack.Screen name="TabNavigation" component={TabNavigation} options={{ headerLeft: null, title: 'Rising Sun College',}}/>
                <MainStack.Screen name="SingIn" component={SingIn} 
                options={{
                    title: 'Rising Sun College',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                 }} />
                <MainStack.Screen name="SingUp" component={SingUp} options={{ 
                    title: 'Regester Now',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                 }} />
                <MainStack.Screen name="UserPicker" component={UserPicker} options={{ headerShown : false }} />
                <MainStack.Screen name="SingalCard" component={SingalCard} />
                <MainStack.Screen name="AllCompanies" component={AllCompanies} />
                <MainStack.Screen name="AllStudents" component={AllStudents} />
                <MainStack.Screen name="AdminePage" component={AdminePage}
                    options={{
                        title: 'Rising Sun College',
                        headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                 }}/>
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

export const RootStackScreen = () => {
    return (
        <RootStack.Navigator mode="modal">
            <RootStack.Screen
                name="Main"
                component={MainStackScreen}
                options={{ headerShown: false }}
            />
            <RootStack.Screen name="MyModal" component={SplashScreen} />
        </RootStack.Navigator>
    );
}


export const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'HOME') {
                        iconName = focused ? 'home' : 'home-outline';
                        size =  focused ? 35 : size;
                    } else if(route.name === 'Account'){
                        iconName = focused ? 'person' : 'person-outline';
                        size =  focused ? 35 : size;
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#02301c',
                inactiveTintColor: '#6e857b',
            }}
        >
            <Tab.Screen name="HOME" component={Home} />
            <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
    );
}
