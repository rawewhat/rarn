import React from 'react'
import styled from 'styled-components/native'

import { darkShadow } from '@rarn/ui/style'
import { SIZE, SPACING } from '@rarn/ui/theme'

function Card({
  corner = SIZE.CORNER,
  height = 'auto',
  shadow = darkShadow,
  width = SIZE.FULL,
  style,
  children,
}) {
  return (
    <Container
      customStyle={{
        corner,
        height,
        width,
      }}
      style={[shadow, style]}>
      {children}
    </Container>
  )
}

const Container = styled.View(({ customStyle: { corner, height, width } }) => ({
  width: width,
  height: height,
  minHeight: SIZE.CARD, // minimun card height
  alignItems: 'center',
  borderRadius: corner,
  padding: SPACING.SMALL,
}))

export default Card
