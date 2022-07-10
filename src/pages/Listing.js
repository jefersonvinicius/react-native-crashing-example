import faker from 'faker';
import React, {useEffect, useState} from 'react';
import {Alert, FlatList, Text, TouchableOpacity, View} from 'react-native';

function createEntry() {
  const name = faker.name.firstName();
  return {
    id: faker.datatype.uuid(),
    name,
    email: faker.internet.email(name),
  };
}

export default function Listing() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Array.from({length: 300}).map(() => createEntry()));
  }, []);

  function handleItemPress(item) {
    Alert.alert('Uhuul!', `You select ${item.name} with email: ${item.email}`);
  }

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={{flexDirection: 'row', padding: 10}}
            onPress={() => handleItemPress(item)}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={{color: '#000', fontSize: 16}}>{item.name}</Text>
                <Text style={{color: '#000', fontSize: 10}}>{item.email}</Text>
              </View>
              <View>
                <Text style={{color: '#000', fontSize: 16}}>#{index + 1}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => (
          <View style={{height: 0.5, backgroundColor: '#888'}} />
        )}
      />
    </View>
  );
}
