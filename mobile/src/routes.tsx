import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';

import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="OrphanagesMap" component={OrphanagesMap}></Screen>
        <Screen name="OrphanageDetails" component={OrphanageDetails}></Screen>
        <Screen name="SelectMapPosition" component={SelectMapPosition}></Screen>
        <Screen name="OrphanageData" component={OrphanageData}></Screen>
      </Navigator>
    </NavigationContainer>
  );
}
