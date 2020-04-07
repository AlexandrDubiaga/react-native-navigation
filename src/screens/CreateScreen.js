import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';



export const  CreateScreen=() =>{
  return (
    <View>
      <Text style={styles.center}>CreateScreen</Text>
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
