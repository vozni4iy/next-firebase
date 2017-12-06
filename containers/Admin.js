import React, { Component } from 'react'
import { CenterView, ButtonsWrapper, Button, Flex } from 'src/components/styled'
import { Router } from 'routes'
import { loadAuth, loadCustomers } from 'src/actions'
import { getAuth, getCustomers } from 'src/lib/firebase'
import { AdminView } from 'src/components/main'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Admin extends Component {
  componentDidMount() {
    let token = localStorage.getItem('token')
    if (!token) {
      Router.pushRoute('login')
    } else {
      let firebase = this.props.firebase
      getAuth(firebase, token, this.props.loadAuth)
      getCustomers(firebase, token, this.props.loadCustomers)
    }
  }

  viewCustomer(id) {
    Router.pushRoute('customer',{uid: this.props.auth.id, did: id})
  }

  render () {
    let auth = this.props.auth
    let customers = this.props.customers
    return (
      <div>
        {auth && customers && (
          <AdminView viewCustomer={this.viewCustomer.bind(this)} auth={auth} customers={customers}/>)}
      </div>
    )

  }
}

export default connect ((state, props) => {
    return {
      customers: state.customers.data,
      auth: state.auth.data,
      firebase: props.firebase,
      store: props.store
    }
  },
  dispatch => bindActionCreators({
    loadAuth, loadCustomers
  }, dispatch)
)(Admin)
