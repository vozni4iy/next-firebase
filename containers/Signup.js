import React, { Component } from 'react'
import { CenterView, Button } from 'src/components/styled'
import { Router } from 'routes'
import { loadAuth } from 'src/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { SignupForm } from 'src/components/form/view'
import { validate } from 'src/validation/SignupValidation'
import { reduxForm } from 'redux-form'
import Alert from 'react-s-alert';

class Signup extends Component {
  componentWillReceiveProps(nextProps) {
    let auth = nextProps.auth
    if (auth && auth.id) {
      localStorage.setItem('token', auth.id)
      Router.pushRoute('admin',{id: auth.id})
    }
  }

  handleSignup (values) {
    let firebase = this.props.firebase
    const auth = firebase.auth()
    const promise = auth.createUserWithEmailAndPassword(values.email, values.password)
    promise
    .then(user => {
      firebase.database().ref('advertisers/' + user.uid).set({
        email: values.email,
        name: values.name,
        address: values.address,
        btw: values.btw? values.btw : ''
      })
      this.props.loadAuth({
        id: user.uid,
        email: values.email,
        name: values.name,
        address: values.address,
        btw: values.btw? values.btw : ''
      })
    })
    .catch(e => {
      console.log(e);
      if (e.code === "auth/email-already-in-use") {
        console.log('email exist')
        Alert.error('Email is already registered', {
            position: 'top-right',
            timeout: 'none'
        });
      } else {
        Alert.error('Cannot register user', {
            position: 'top-right',
            timeout: 'none'
        });
      }
    })
  }

  render () {
    const { handleSubmit } = this.props
    return (
      <CenterView height='700px'>
        <Alert stack={{limit: 3}} />
        <SignupForm onSubmit={handleSubmit(this.handleSignup.bind(this))}/>
        <Button style={{width: '340px'}} onClick={() => Router.pushRoute('main')}>Back to Main</Button>
      </CenterView>
    )

  }
}

export default connect ((state, props) => {
    return { auth: state.auth.data, firebase: props.firebase, store: props.store  }
  },
  dispatch => bindActionCreators({
    loadAuth
  }, dispatch))(reduxForm({
    form: 'signupform',
    validate
  })(Signup))
