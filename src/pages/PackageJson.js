import React from 'react';
import {ScrollView, Text} from 'react-native';
import packageJson from '../../package.json';

export default function PackageJson() {
  return (
    <ScrollView contentContainerStyle={{padding: 5}}>
      <Text style={{color: '#000'}}>
        {JSON.stringify(packageJson, null, 4)}
      </Text>
    </ScrollView>
  );
}
