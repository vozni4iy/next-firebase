import React, { Component } from 'react'
import decorate from 'src/lib/decorate'
import { Admin } from 'src/containers/pages'

export default decorate ((props) => (
  <Admin url={props.url} firebase={props.firebase} store={props.store}/>
))
