import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';



export const  BookedScreen=() =>{
  return (
    <View>
      <Text style={styles.center}>BookedScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    center:{
       
        justifyContent:'center',
        alignItems:'center',
        color:'blue'

    }
});
