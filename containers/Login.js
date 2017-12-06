import React, { Component } from 'react'
import { CenterView, Button} from 'src/components/styled'
import { Router } from 'routes'
import { loadAuth } from 'src/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { LoginForm } from 'src/components/form/view'
import * as firebase from 'firebase'
import { validate } from 'src/validation/LoginValidation'
import { reduxForm } from 'redux-form'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wrongpass: false,
      reset: props.url.query.reset
    }
  }

  componentWillReceiveProps(nextProps) {
    let auth = nextProps.auth
    debugger
    if (auth && auth.id) {
      localStorage.setItem('token', auth.id)
      Router.pushRoute('admin',{id: auth.id})
    }
  }

  handleLogin(values) {
    let firebase = this.props.firebase
    const auth = firebase.auth()
    const promise = auth.signInWithEmailAndPassword(values.email, values.password)
    promise
    .then(user => {
      firebase.database().ref('advertisers/' + user.uid).once('value')
      .then(snap => {
        const val = snap.val()

        if(!val){
          alert('Something went wrong with your login. Please Logout and login again')
        }
        
        this.props.loadAuth({
          id: user.uid,
          email: values.email,
          name: val.name,
          address: val.address,
          btw: val.btw
        })
      })
      .catch(e => console.log(e.message))
    })
    .catch(e => {
      console.log(e.message)
      this.setState({
        wrongpass: true
      })
    })
  }

  render () {
    const { handleSubmit } = this.props
    let message = this.state.wrongpass ? 'Your login or password is invalid' : ''
    if (this.state.reset) {
      message = 'Check email to reset password'
    }
    return (
      <CenterView height='600px'>
        <CenterView>
          <h1>Please log in</h1>
          <h5>{message}</h5>
          <LoginForm onSubmit={handleSubmit(this.handleLogin.bind(this))}/>
        </CenterView>
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
    form: 'loginform',
    validate
  })(Login))
