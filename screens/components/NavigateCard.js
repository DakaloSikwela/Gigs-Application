import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const NavigateCard = () => {
  return (
    // Here I can change colors 
  <SafeAreaView  style={tw`bg-white flex-1`}>  
      <Text style={twz}>Good Morning</Text>
    </SafeAreaView>
  )
}

export default NavigateCard

const styles = StyleSheet.create({})