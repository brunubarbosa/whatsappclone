import React from 'react';
import { View, StyleSheet,Image, Text } from 'react-native';
import Svg, {
    Path, Rect,
  } from 'react-native-svg';
  

export default function StatusAvatar({profiles}) {

console.log('profileeeeeee', profiles)
  function myArc(cx, cy, radius, max){
    var d = " M "+ (cx + radius) + " " + cy;
    let ang = 0;
    while(ang<=max){
      var radians = ang * (Math.PI / 180);  // convert degree to radians
      var x = cx + Math.cos(radians) * radius;
      var y = cy + Math.sin(radians) * radius;
      d += " L "+x + " " + y;
      ang++
    }
    return d;
  }

  const amount = [...Array(2).keys()];
  const dd = myArc(35, 35, 30, parseInt(360/amount.length) == 360 ? 360 : parseInt(360/amount.length)-4)
  console.log('gggggggg', profiles);

  const getPicture = (profile, index) => {
    return (
      <View
        style={{position:'absolute', justifyContent: 'center', alignItems: "center"}}
        key={index}
      > 
      <Svg width="70" height="70">
        <Path
          d={dd}
          fill="none"
          stroke="#00BFA5"
          strokeWidth={2}
          transform={{ rotation: (360/amount.length*index+1) + 270, originX: 35, originY: 35 }}
        />
      </Svg>
      <Image 
        source={{uri: profile.picture.large}} 
        style={{width: 55, height: 55, position: 'absolute', borderRadius: 50}}
      />
    </View>
    )
  }
  return (
    <View>
      {profiles.map((profile, profileIndex) => {
      {return (
        <View key={profileIndex} style={{position: 'absolute', top: 100 * profileIndex}}>
          {amount.map((item, index) =>  getPicture(profile, index))}
      </View>
        )}
    })}
    </View>
  )
}




























// {profiles.map(profile => (
//   <View>
//     <View style={{position: 'relative'}}>
//       <View
//           style={{position:'absolute', justifyContent: 'center', alignItems: "center"}}
//           key={item}
//         > 
//         <Svg width="70" height="70">
//           <Path
//             d={dd}
//             fill="none"
//             stroke="#00BFA5"
//             strokeWidth={2}
//             transform={{ rotation: (360/amount.length*index+1) + 270, originX: 35, originY: 35 }}
//           />
//         </Svg>
//         <Image 
//           source={{uri: profile.picture.large}} 
//           style={{width: 55, height: 55, position: 'absolute', borderRadius: 50}}
//         />
//       </View>
//     </View>
//     <View>
//       <View
//         style={{position:'absolute', justifyContent: 'center', alignItems: "center", left: 100}}
//         key={item}
//         > 
//         <Svg width="70" height="70">
//           <Path
//             d={dd}
//             fill="none"
//             stroke="#00BFA5"
//             strokeWidth={2}
//             transform={{ rotation: (360/amount.length*index+1) + 270, originX: 35, originY: 35 }}
//           />
//         </Svg>
//         <Image 
//           source={{uri: profile.picture.large}} 
//           style={{width: 55, height: 55, position: 'absolute', borderRadius: 50}}
//         />
//       </View>
//       </View>
    
// </View>
// ))}            {profiles.map(profile => (
//   <View>
//     <View style={{position: 'relative'}}>
//       <View
//           style={{position:'absolute', justifyContent: 'center', alignItems: "center"}}
//           key={item}
//         > 
//         <Svg width="70" height="70">
//           <Path
//             d={dd}
//             fill="none"
//             stroke="#00BFA5"
//             strokeWidth={2}
//             transform={{ rotation: (360/amount.length*index+1) + 270, originX: 35, originY: 35 }}
//           />
//         </Svg>
//         <Image 
//           source={{uri: profile.picture.large}} 
//           style={{width: 55, height: 55, position: 'absolute', borderRadius: 50}}
//         />
//       </View>
//     </View>
//     <View>
//       <View
//         style={{position:'absolute', justifyContent: 'center', alignItems: "center", left: 100}}
//         key={item}
//         > 
//         <Svg width="70" height="70">
//           <Path
//             d={dd}
//             fill="none"
//             stroke="#00BFA5"
//             strokeWidth={2}
//             transform={{ rotation: (360/amount.length*index+1) + 270, originX: 35, originY: 35 }}
//           />
//         </Svg>
//         <Image 
//           source={{uri: profile.picture.large}} 
//           style={{width: 55, height: 55, position: 'absolute', borderRadius: 50}}
//         />
//       </View>
//       </View>
    
// </View>
// ))}