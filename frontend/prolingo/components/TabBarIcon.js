import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const TabBarIcon = ({color, icon}) => {
  return (
    <View>
          <Image
              source={icon}
              resizeMode='contain'
              style={ styles.image} />
    </View>
  )
}



const styles = StyleSheet.create({
    image: {
        width: 40,
        height: 40
    }
})