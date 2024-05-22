import { View, Text, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import profile from '@/constants/profile'

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);

  const handleFocus = () => {
    (isEdit ? setIsEdit(false) : setIsEdit(true));
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground
          source={profile.background3}
          resizeMode='contain'
          style={styles.background}
        >

          <View style={styles.containerLogo}>
            <ImageBackground
              source={profile.containerLogo}
              resizeMode='contain'
              style={styles.backgroundContainerLogo}
            >
              <Image
                source={profile.user}
                style={styles.user}
              />
            </ImageBackground>
          </View>

          <View style={styles.userData}>
            <ImageBackground
              source={profile.userData}
              resizeMode='contain'
              style={styles.backgroundUserData}
            >
              {isEdit && (
                <View style={styles.usernameContainer}>
                  <Image source={profile.arrowLeft} style={styles.iconEdit} />
                  <TextInput style={styles.header} value='Pool-7' />
                  <Image source={profile.arrowRight} style={styles.iconEdit} />
                </View>)}
              {!isEdit && (
                <View style={styles.usernameContainer}>
                  <TextInput editable={false} style={styles.header} value='Pool-7' />
                </View>)}

              <View style={styles.scoreContainer}>
                <View style={styles.baseContainer}>
                  <Text>MAPAS DESBLOQUEADOS</Text>
                  <Text>1</Text>
                </View>

                <View style={styles.baseContainer}>
                  <Text>MAPAS TERMINADOS</Text>
                  <Text>1</Text>
                </View>

                <View style={styles.baseContainer}>
                  <Text>PUNTOS</Text>
                  <Text>1</Text>
                </View>

                <View style={styles.baseContainer}>
                  <TouchableOpacity onPress={handleFocus}>
                    <Image
                      resizeMode='contain'
                      style={styles.icon}
                      source={isEdit ? profile.save : profile.edit} />
                  </TouchableOpacity>
                </View>

              </View>
            </ImageBackground>
          </View>

        </ImageBackground>
      </View>
    </SafeAreaView>

  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: '100%',
  },
  containerLogo: {
    marginTop: 50,
    height: 150,
    zIndex: 10,

  },
  userData: {
    height: 400,
    position: 'relative',
    top: -45
  },
  scoreContainer: {
    marginTop: 50,
    height: 200,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  usernameContainer: {
    marginTop: 65,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconEdit: {
    height: 30,
    width: 30,
    tintColor: 'black'
  },
  baseContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "red",
    textAlign: 'center',
    maxWidth: 160
  },
  background: {
    height: Dimensions.get('window').height,
    // height: '100%',
    width: '100%'
  },
  backgroundContainerLogo: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundUserData: {
    height: '100%',
  },
  user: {
    height: '95%',
    width: '40%',
    borderRadius: 100,
  },
  icon: {
    height: 40,
    width: 40,
  }
});

export default Profile