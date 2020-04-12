import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import profiles from '../../mocks/profiles';

export default function Conversas() {
  return (
    <View>
      <ScrollView>
        {profiles.map((profile) => (
          <View
            key={profile.id}
            style={{minHeight: 100, justifyContent: 'center'}}>
            <Image
              source={{uri: profile.posts[0]}}
              style={{
                width: 55,
                height: 55,
                position: 'absolute',
                borderRadius: 50,
                left: 7.5,
              }}
            />
            <Text
              style={{marginLeft: 80, fontWeight: 'bold', color: '#545454'}}>
              {profile.name}
            </Text>
            <Text style={{marginLeft: 80, color: '#b5b5b5'}}>
              Há 23 minutos
            </Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#b5b5b5',
                width: '80%',
                position: 'relative',
                top: 25,
                left: '20%',
              }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
