import React, { Component } from 'react';
import Picker from './Picker';
import { SelectorContainer } from 'src/components/styled'
import moment from 'moment';

export default class DateSelector extends Component {

  constructor() {
    super();
    this.state = {
      startValue: null,
      endValue: null,
      startOpen: false,
      endOpen: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.startdate !== this.props.startdate) {
      let startValue = moment(nextProps.startdate, "DD.MM.YYYY")
      this.setState({
        startValue: startValue
      });
    }
    if (nextProps.enddate !== this.props.enddate) {
      let endValue = moment(nextProps.enddate, "DD.MM.YYYY")
      this.setState({
        endValue: endValue
      });
    }
  }

  onStartOpenChange(startOpen) {
    this.setState({
      startOpen
    });
  }

  onEndOpenChange(endOpen) {
    this.setState({
      endOpen
    });
  }

  onStartChange(value) {
    let endValue = this.state.endValue
    let tomorrow
    if (!endValue || (+value >= +endValue)) {
      tomorrow = moment(value)
      tomorrow.add(1, 'days')
    }
    this.props.onStartChange(value.format("DD.MM.YYYY"))
    if (tomorrow) {
      this.props.onEndChange(tomorrow.format("DD.MM.YYYY"))
    }
  }

  onEndChange(value) {
    let startValue = this.state.startValue
    let yesterday
    if (+value <= +startValue) {
      yesterday = moment(value)
      yesterday.subtract(1, 'days')
    }
    this.props.onEndChange(value.format("DD.MM.YYYY"))
    if (yesterday) {
      this.props.onStartChange(yesterday.format("DD.MM.YYYY"))
    }
  }

  renderDurationArray(startdate, duration) {
    let arr = []
    if (!startdate) {
      return arr
    } else if (!duration) {
      arr.push(startdate)
      return arr
    }
    let tmp
    for (let i = 0; i < duration; i++) {
      tmp = moment(startdate).add(i, 'days')
      arr.push(tmp)
    }
    return arr
  }

  render() {
    const state = this.state;
    let today = moment()
    let yesterday = moment().subtract(1, 'days')
    let multiple = this.props.multiple;
    let forbiddenStart = {
      date: yesterday,
      direction: true
    };
    let forbiddenEnd = {
      date: today,
      direction: true
    };
    let durationArr = this.renderDurationArray(state.startValue, this.props.duration)
    const startPicker = (
      <div>
         Start Date：
         <Picker
           onOpenChange={this.onStartOpenChange.bind(this)}
           showValue={state.startValue}
           open={state.startOpen}
           durationArr={durationArr}
           onChange={this.onStartChange.bind(this)}
           forbiddenDate={forbiddenStart}
         />
      </div>
    );
    const endPicker = (
      <div>
         End Date：
         <Picker
           onOpenChange={this.onEndOpenChange.bind(this)}
           open={state.endOpen}
           durationArr={durationArr}
           showValue={state.endValue}
           onChange={this.onEndChange.bind(this)}
           forbiddenDate={forbiddenEnd}
         />
      </div>
    );

 return (
   <SelectorContainer>
    {startPicker}
    {(state.startValue && multiple) ? endPicker : null}
  </SelectorContainer>);
  }
}
