import React from 'react'
import App, { Container } from 'next/app'
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, BaseProvider, styled } from 'baseui'

import { styletron } from '../styletron'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <StyletronProvider value={styletron}>
          <BaseProvider theme={LightTheme}>
            <Component {...pageProps} />
          </BaseProvider>
        </StyletronProvider>
      </Container>
    )
  }
}
