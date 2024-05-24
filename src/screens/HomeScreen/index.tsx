import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {HomeMocks} from './mocks';
import {THomeTab} from '@/utils/types/THomeScreen';
import {TAppNavigation} from '@/utils/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type THomeScreen = NativeStackScreenProps<TAppNavigation, 'HomeScreen'>;
const HomeScreen = ({navigation}: THomeScreen) => {
  const renderTab = ({item}: ListRenderItemInfo<THomeTab>) => {
    return (
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => navigation.navigate(item.navigateTo)}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <Text>UI Animation</Text>
      <FlatList
        data={HomeMocks.Tabs}
        renderItem={renderTab}
        numColumns={2}
        columnWrapperStyle={{gap: 10}}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  tabItem: {
    width: '30%',
    height: 100,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});
