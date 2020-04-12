import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export default function getStatusRings(profile) {
  const posts = profile.posts;

  const myArc = (cx, cy, radius, max) => {
    var d = ' M ' + (cx + radius) + ' ' + cy;
    let ang = 0;
    while (ang <= max) {
      var radians = ang * (Math.PI / 180); // convert degree to radians
      var x = cx + Math.cos(radians) * radius;
      var y = cy + Math.sin(radians) * radius;
      d += ' L ' + x + ' ' + y;
      ang++;
    }
    return d;
  };

  const dd = (amount) =>
    myArc(
      35,
      35,
      30,
      parseInt(360 / amount.length) == 360
        ? 360
        : parseInt(360 / amount.length) - 4,
    );

  return posts.map((item, index) => (
    <View
      style={{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      key={index}>
      <Svg width="70" height="70">
        <Path
          d={dd(posts)}
          fill="none"
          stroke={profile.viewedAmount > index ? '#b5b5b5' : '#00BFA5'}
          strokeWidth={2}
          transform={{
            rotation: (360 / posts.length) * index + 1 + 270,
            originX: 35,
            originY: 35,
          }}
        />
      </Svg>
    </View>
  ));
}
