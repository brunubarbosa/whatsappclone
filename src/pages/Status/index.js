import React, { useEffect, useState } from 'react';
import { View, StyleSheet,Image, Text } from 'react-native';

import StatusAvatar from '../../components/StatusItem';
import route from '../../routes';

export default function Status() {
  const [personsProfiles, setPersonsProfiles] = useState([]);

  useEffect(() => {
    console.log('effect');
    Promise.all([
      route('https://randomuser.me/api/?nat=br'),
      route('https://randomuser.me/api/?nat=br'),
      route('https://randomuser.me/api/?nat=br'),
      route('https://randomuser.me/api/?nat=br'),
      route('https://randomuser.me/api/?nat=br')]
    ).then((items) => items.map(item => setPersonsProfiles([...personsProfiles, item[0]])))  
  }, []);

  console.log(personsProfiles)
  return (
    <View><StatusAvatar profiles={personsProfiles} /></View>
  );
}