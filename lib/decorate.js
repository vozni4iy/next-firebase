import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import stylesheet from 'styles/index.css'
import { MainWrapper, Container } from 'src/components/styled'
import { Header, Footer } from 'src/containers/decorate'
import configureStore from './GetStore'
import * as firebase from 'firebase'
import { Provider } from 'react-redux'
import { CONFIG } from 'src/constants/firebase'
import GaWrapper from 'src/containers/GaWrapper';

export default (InnerComponent) => (
  class decorate extends Component {
    render () {
      const store = configureStore()
      if (!firebase.apps.length) {
        console.log('initialize firebase')
        firebase.initializeApp(CONFIG)
      }
      return (
          <Provider store={store}>
            <Container>
              <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
              <MainWrapper>
                {typeof window !== 'undefined' && window.innerWidth > 1000 && <Header {...this.props}/>}
                <div>
                  <GaWrapper>
                    <InnerComponent {...this.props} firebase={firebase} store={store}/>
                  </GaWrapper>
                </div>
                <Footer />
              </MainWrapper>
            </Container>
          </Provider>
      )
    }
  }
)
