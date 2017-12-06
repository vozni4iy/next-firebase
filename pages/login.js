import React, { Component } from 'react'
import decorate from 'src/lib/decorate'
import { Login } from 'src/containers/pages'

export default decorate ((props) => (
  <Login url={props.url} firebase={props.firebase} store={props.store}/>
))
