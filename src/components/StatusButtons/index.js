import React from 'react';

import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function StatusButtons() {
  return (
    <>
      <View
        style={{
          position: 'absolute',
          right: 10,
          bottom: 10,
          backgroundColor: '#25d366',
          height: 70,
          width: 70,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon name="camera" color="white" size={25} />
      </View>

      <View
        style={{
          position: 'absolute',
          right: 15,
          bottom: 100,
          backgroundColor: '#edf7f7',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          height: 50,
          width: 50,
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon name="pencil-alt" color="#919191" size={25} />
      </View>
    </>
  );
}
