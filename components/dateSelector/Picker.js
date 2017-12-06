import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/en-gb';
import MainCalendar from '../calendar';
import { ChooseDate, OpenPicker, DateContainer } from 'src/components/styled'

export default class Picker extends Component {
  constructor() {
    super();
    this.state = {
      date: "01.01.2016"
    }
  }

  componentDidMount() {
    let today = moment();
    this.setState({
      date: today.format("DD.MM.YYYY")
    });
  }

  componentWillReceiveProps() {
    let forbiddenDate = this.props.forbiddenDate;
    let today = (forbiddenDate) ? (forbiddenDate.date) : (moment());
    this.setState({
      date: today.format("DD.MM.YYYY")
    });
  }

  onSubmit() {
    let dateFormat = "DD.MM.YYYY";
    let date = this.state.date;
    let dateTime = moment(date, dateFormat);
    this.props.onChange(dateTime);
    this.props.onOpenChange(false);
  }

  onSelect(date) {
    this.setState({
      date: date
    });
    let dateTime = moment(date, "DD.MM.YYYY");
    this.props.onChange(dateTime);
    this.props.onOpenChange(false);
  }

  render() {
    const props = this.props;
    const fullFormat = 'DD.MMM.YYYY';
    const now = moment();
    now.locale('en-gb').utcOffset(0);
    const showValue = props.showValue;
    const isOpen = props.open;
    const forbiddenDate = props.forbiddenDate;
    const calendar = (
      <MainCalendar
        btnChangeYear={true}
        onSelect={this.onSelect.bind(this)}
        durationArr={this.props.durationArr}
        forbiddenDate={(forbiddenDate) ? (forbiddenDate) : (null)}
      />);

      return (
        <div>
          <ChooseDate display={!isOpen}>
            <input
              placeholder="click to choose a date"
              style={{ width: 250 }}
              readOnly
              value={showValue && showValue.format(fullFormat) || ''}
              onClick={this.props.onOpenChange}
            />
          </ChooseDate>
          <OpenPicker display={isOpen}>
            <DateContainer>
              <span>Date:</span>
              <span>{showValue && showValue.format(fullFormat) || ''}</span>
            </DateContainer>
            {calendar}
          </OpenPicker>
        </div>

      );
  }
}
