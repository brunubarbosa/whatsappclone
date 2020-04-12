import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
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
          <View>
            <Image
              source={{uri: profiles[0].picture}}
              style={{width: 55, height: 55, borderRadius: 50, left: 7.5}}
            />
            <View
              style={{
                position: 'absolute',
                right: -12,
                top: '40%',
                backgroundColor: '#56e04f',
                padding: 5,
                borderRadius: 50,
              }}>
              <Icon name="plus" color="white" size={15} />
            </View>
          </View>
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
        {profiles.map((profile) => (
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
    </View>
  );
}
