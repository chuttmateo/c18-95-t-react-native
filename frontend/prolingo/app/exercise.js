import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TranslationListGame from '../components/games/TranslationListGame'
import SelectionGame from '../components/games/SelectionGame'
import PartialTranslationGame from '../components/games/PartialTranslationGame'
import DropdownTranslationGame from '../components/games/DropdownTranslationGame'

const exercise = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <DropdownTranslationGame/>
    </SafeAreaView> 
  )
}

export default exercise

const styles = StyleSheet.create({})