import {View, Text} from 'react-native';
import React, {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type IconProps = PropsWithChildren<{
  name: string;
}>;

export default function Icons({name}: IconProps) {
  switch (name) {
    case 'circle':
      return <Icon name="circle-thin" size={38} color={'#F7CD2E'} />;
      break;
    case 'cross':
      return <Icon name="times" size={38} color={'#38CC77'} />;
      break;
    default:
      break;
  }
  return (
    <View>
      <Text>icons</Text>
    </View>
  );
}
