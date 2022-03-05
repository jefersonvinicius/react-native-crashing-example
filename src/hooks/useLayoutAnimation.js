import {useEffect} from 'react';
import {Platform, UIManager, LayoutAnimation} from 'react-native';

export default function useLayoutAnimationConfiguration() {
  useEffect(() => {
    if (
      Platform.OS === 'android' &&
      UIManager.setLayoutAnimationEnabledExperimental
    ) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);
}

export function configureNextAnimation() {
  const androidAnimation = {
    duration: 200,
    create: {
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {type: LayoutAnimation.Types.easeInEaseOut},
  };

  Platform.OS === 'ios'
    ? LayoutAnimation.easeInEaseOut()
    : LayoutAnimation.configureNext(androidAnimation);
}
