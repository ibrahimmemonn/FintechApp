import React from 'react';
import {useTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Dashboard from '../assets/svg/Dashboard';
import CardSvg from '../assets/svg/CardSvg';
import Cards from '../screens/cart/Cards';
import Profile from '../screens/profile/Profile';
import ProfileSvg from '../assets/svg/ProfileSvg';

const Tab = createBottomTabNavigator();

const HomeIcon = ({focused}) => <Dashboard focused={focused} />;

const CardIcon = ({focused}) => <CardSvg focused={focused} />;

const ProfileIcon = ({focused}) => <ProfileSvg focused={focused} />;

const BottomNavigation = () => {
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      showLabel={false}
      screenOptions={{
        lazy: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.headerBackground,
          borderTopColor: colors.primaryBorder,
          borderTopWidth: 1,
        },
      }}>
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="Cards"
        component={Cards}
        options={{
          tabBarIcon: CardIcon,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ProfileIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
