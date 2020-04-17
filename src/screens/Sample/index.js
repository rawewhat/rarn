import React from 'react'
import { Button, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { sampleSlice } from 'src/services/reducers'
import { sampleSelector } from 'src/services/selectors'

const SampleScreen = () => {
  const dispatch = useDispatch()
  const sample = useSelector(sampleSelector)
  const { sampleAction } = sampleSlice.actions
  return (
    <View>
      <Text>{sample}</Text>
      <Button title="Change" onPress={() => dispatch(sampleAction('love'))} />
    </View>
  )
}

export default SampleScreen
