import faker from 'faker';
import React, {useEffect, useMemo, useState} from 'react';
import {Button, FlatList, View} from 'react-native';
import useLayoutAnimationConfiguration, {
  configureNextAnimation,
} from '../hooks/useLayoutAnimation';

const COLORS_AMOUNT = 60;
const COLOR_SIZE = 60;
const SPACE_COLOR = 10;

function random() {
  const gen = () => faker.datatype.number(4);
  let initial, final;
  while (initial === final) {
    initial = gen();
    final = gen();
  }
  return {initial, final};
}

function createEntry() {
  return {
    id: faker.datatype.uuid(),
    color: faker.commerce.color(),
  };
}

export default function Animations() {
  const [colors, setColors] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useLayoutAnimationConfiguration();

  useEffect(() => {
    configureNextAnimation();
    setColors(Array.from(new Array(COLORS_AMOUNT)).map(() => createEntry()));
  }, []);

  const boxColor = useMemo(() => {
    return faker.commerce.color();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  function handleAnimatePress() {
    const {initial, final} = random();
    configureNextAnimation();
    setColors(draft => {
      const tmp = {...draft[initial]};
      draft[initial] = draft[final];
      draft[final] = tmp;
      return [...draft];
    });
  }

  return (
    <View>
      <FlatList
        data={colors}
        keyExtractor={item => item.id}
        horizontal
        renderItem={({item, index}) => (
          <View
            style={{
              width: COLOR_SIZE,
              height: COLOR_SIZE,
              borderRadius: 30,
              backgroundColor: item.color,
              borderColor: '#999',
              borderWidth: 1,
            }}
          />
        )}
        ItemSeparatorComponent={() => (
          <View style={{marginHorizontal: SPACE_COLOR / 2}} />
        )}
        contentContainerStyle={{padding: 10}}
      />
      <Button title="Animate List" onPress={handleAnimatePress} />

      <View style={{marginVertical: 20}} />

      <Button
        title={isVisible ? 'Hide' : 'Show'}
        onPress={() => {
          configureNextAnimation();
          setIsVisible(draft => !draft);
        }}
      />
      {isVisible && (
        <View
          style={{
            height: 400,
            backgroundColor: boxColor,
            margin: 10,
          }}
        />
      )}
    </View>
  );
}
