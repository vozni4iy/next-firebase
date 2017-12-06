import React, { Component } from 'react'
import decorate from 'src/lib/decorate'
import { Signup } from 'src/containers/pages'

export default decorate ((props) => (
  <Signup url={props.url} firebase={props.firebase} store={props.store}/>
))
