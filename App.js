import React, { useEffect, useState } from 'react';
import { View, StyleSheet,Image, Text } from 'react-native';
import Svg, {
    Path, Rect,
  } from 'react-native-svg';
  

export default function StatusAvatar() {


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
    return d
  }     

  const amount = [0,1,2,3,4,5];
  const dd = myArc(35, 35, 30, parseInt(360/amount.length) == 360 ? 360 : parseInt(360/amount.length)-4)

  return (
    <>
    {amount.map((item, index) => {

      return (
        <View style={{position:'absolute'}} key={item}> 
          <Svg width="70" height="70">
            <Path d={dd} fill="none" stroke="#007dff" strokeWidth={2} transform={{ rotation: (360/amount.length*index+1), originX: 35, originY: 35 }} />
          </Svg>
        </View>
      )
    })}
    </>
  );
}

const styles = StyleSheet.create({
  avatar:{
    height:54,
    width:54,
    borderRadius:27,
    position:'absolute',
    marginLeft:8
  }
})