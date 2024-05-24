import {ListRenderItemInfo, View, ViewToken} from 'react-native';
import React from 'react';
import Animated, {useSharedValue} from 'react-native-reanimated';
import Item from './components/Item';

const StackedFlatlist = () => {
  const viewableItems = useSharedValue<ViewToken[]>([]);

  const renderItem = ({index}: ListRenderItemInfo<any>) => {
    return <Item key={index} index={index} viewableItems={viewableItems} />;
  };
  return (
    <View>
      <Animated.FlatList
        data={Array.from({length: 20})}
        renderItem={renderItem}
        contentContainerStyle={{gap: 10}}
        ListHeaderComponent={() => <View style={{height: 10}} />}
        ListFooterComponent={() => <View style={{height: 10}} />}
        onViewableItemsChanged={({viewableItems: vItems}) => {
          viewableItems.value = vItems;
        }}
      />
    </View>
  );
};

export default StackedFlatlist;
