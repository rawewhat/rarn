import React from 'react'
import { Button, Text, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { Card, Layout } from 'src/elements'

import { Svg } from 'src/assets'
import { SCREEN } from 'src/resources/constants'
import { navigate } from 'src/services/helpers'
import { loginUser, selectAuthToken } from 'src/services/slices/authSlice'
import { selectSampleText, updateSample } from 'src/services/slices/sampleSlice'
import { formatAmount } from 'src/services/utils'

const SampleScreen = ({ componentId }) => {
  const dispatch = useDispatch()
  const sample = useSelector(selectSampleText)
  const { loading, token } = useSelector(selectAuthToken)
  console.log('SampleScreen', sample, loading, token)
  return (
    <Layout>
      <Svg.Money width={32} height={32} />
      <Card>
        <Text>{sample}</Text>
        {loading === 'pending' && <ActivityIndicator />}
        {token && <Text>{token}</Text>}
        <Text>{formatAmount(14)}</Text>
      </Card>
      <Button title="Change" onPress={() => dispatch(updateSample('love'))} />
      <Button
        title="Go to MainScreen"
        onPress={() => navigate(componentId, SCREEN.MAIN)}
      />
      <Button title="Login" onPress={() => dispatch(loginUser('1'))} />
    </Layout>
  )
}

export default SampleScreen
