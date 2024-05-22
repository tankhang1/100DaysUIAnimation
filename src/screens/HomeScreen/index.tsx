import {
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {HomeMocks} from './mocks';
import {THomeTab} from '@/utils/types/THomeScreen';
import {TAppNavigation} from '@/utils/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
type THomeScreen = NativeStackScreenProps<TAppNavigation, 'HomeScreen'>;
const HomeScreen = ({navigation}: THomeScreen) => {
  const renderTab = ({item, index}: ListRenderItemInfo<THomeTab>) => {
    return (
      <TouchableOpacity
        style={{
          width: '30%',
          height: 100,
          borderWidth: 1,
          borderRadius: 10,
          padding: 10,
        }}
        onPress={() => navigation.navigate(item.navigateTo)}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <Text>UI Animation</Text>
      <FlatList data={HomeMocks.Tabs} renderItem={renderTab} numColumns={2} />
    </View>
  );
};

export default HomeScreen;
