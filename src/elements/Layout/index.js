import React from 'react'
import styled from 'styled-components/native'

import { SPACING } from '@rarn/ui/theme'

function Layout({ style, children, ...rest }) {
  return (
    <Wrapper>
      <Container style={style} {...rest}>
        {children}
      </Container>
    </Wrapper>
  )
}

const Container = styled.View({
  alignItems: 'center',
  padding: SPACING.NORMAL,
})

const Wrapper = styled.SafeAreaView({
  flex: 1,
})

export default Layout
