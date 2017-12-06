import React, { Component } from 'react'
import { CenterView } from 'src/components/styled'
import { Router } from 'routes'
import { loadStartDate, loadEndDate } from 'src/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DateSelector from  'src/components/dateSelector'

class Rdp extends Component {
  onStartChange(value) {
    this.props.loadStartDate(value)
  }

  onEndChange(value) {
    this.props.loadEndDate(value)
  }

  render () {
    return (
      <CenterView>
        <div>Range data picker demo</div>
        <DateSelector
          multiple={true}
          onStartChange={this.onStartChange.bind(this)}
          onEndChange={this.onEndChange.bind(this)}
          startdate="19.06.2017"
          enddate="25.06.2017"/>
        <button onClick={() => Router.pushRoute('main')}>Back to Main</button>
      </CenterView>
    )

  }
}

export default connect ((state, props) => {
    return { startdate: state.date.startdate, enddate: state.date.enddate, store: props.store  }
  },
  dispatch => bindActionCreators({
    loadStartDate, loadEndDate
  }, dispatch)
)(Rdp)
