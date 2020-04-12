import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import Svg, {Path, Rect} from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome5';
import profiles from '../../mocks/profiles';
import getStatusRings from '../../utils/statusRings';

export default function StatusAvatar() {
  return (
    <View>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            height: 80,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Image
            source={{uri: profiles[0].picture}}
            style={{width: 55, height: 55, borderRadius: 50, left: 7.5}}
          />
          <View style={{marginLeft: 25}}>
            <Text style={{fontWeight: 'bold', color: '#545454'}}>
              Meu status
            </Text>
            <Text style={{color: '#b5b5b5'}}>
              Toque para atualizar seu status
            </Text>
          </View>
        </View>
        <Text
          style={{
            backgroundColor: '#e3e3e3',
            color: '#696969',
            paddingVertical: 10,
            paddingHorizontal: 8,
          }}>
          Atualizações recentes
        </Text>
        {profiles.map((profile, profileIndex) => (
          <View
            key={profile.id}
            style={{minHeight: 100, justifyContent: 'center'}}>
            {getStatusRings(profile)}
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
      <View style={{flex: 1}}>
        <View>
          <Text>my text</Text>
        </View>
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
      </View>
    </View>
  );
}
