import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';

export default function Main() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, padding: 10}}>
      <Text
        style={{color: '#000', textAlign: 'center', fontSize: 24, padding: 20}}>
        The Main Screen
      </Text>
      <View style={{height: 200, justifyContent: 'space-evenly'}}>
        <Button
          title="Listing"
          onPress={() => navigation.navigate('Listing')}
        />
        <Button
          title="Animations"
          onPress={() => navigation.navigate('Animations')}
        />
      </View>
    </View>
  );
}
