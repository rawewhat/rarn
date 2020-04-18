import React from 'react'
import { Button, Text, View, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { SCREEN } from 'src/resources/constants'
import { navigate } from 'src/services/helpers/navigationHelper'
import { loginUser, selectAuthToken } from 'src/services/slices/authSlice'
import { updateSample, selectSampleText } from 'src/services/slices/sampleSlice'
import { formatAmount } from 'src/services/utils'

const SampleScreen = ({ componentId }) => {
  const dispatch = useDispatch()
  const sample = useSelector(selectSampleText)
  const { loading, token } = useSelector(selectAuthToken)
  console.log('SampleScreen', sample, loading, token)
  return (
    <View>
      <Text>{sample}</Text>
      {loading === 'pending' && <ActivityIndicator />}
      {token && <Text>{token}</Text>}
      <Text>{formatAmount(14)}</Text>
      <Button title="Change" onPress={() => dispatch(updateSample('love'))} />
      <Button
        title="Go to MainScreen"
        onPress={() => navigate(componentId, SCREEN.MAIN)}
      />
      <Button title="Login" onPress={() => dispatch(loginUser('1'))} />
    </View>
  )
}

export default SampleScreen
