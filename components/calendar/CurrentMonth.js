import React, { Component } from 'react'
import moment from 'moment'
import CurrentDay from './CurrentDay'
import CalendarHeader from './CalendarHeader'
import WeekDays from './WeekDays'
import { CWeek, MonthWrapper } from 'src/components/styled'

export default class CurrentMonth extends Component {

  renderMonth() {
    let curMonth = [];
    for (let i=0; i<6; i++) {
      let curWeek = this.renderWeek(i);
      curMonth.push(<CWeek key={i}>{curWeek}</CWeek>);
    }
    return curMonth;
  }

  renderWeek(i) {
    let curWeek = [];
    let today = this.props.today;
    let curDay = this.firstMonday();
    curDay.add(7*i,'days');
    for (let j=0; j<7; j++) {
      let isCurMonth = (today.month() === curDay.month());
      let isForbidden = false;
      if (this.props.forbiddenDate) {
        let forbiddenDate = this.props.forbiddenDate.date;
        let direction = this.props.forbiddenDate.direction;
        if (direction) {
          isForbidden = (+forbiddenDate) > (+curDay);
        } else {
          isForbidden = (+forbiddenDate) < (+curDay);
        }
      }
      let savedDay = moment(curDay);
      let durationArr = this.props.durationArr
      let isBound = false
      let isBetween = false
      let dateformat = "DD.MM.YYYY"
      for (let i = 0; i < durationArr.length; i++) {
        if ((i === 0) || (i === (durationArr.length - 1))) {
          if (savedDay.format(dateformat) === durationArr[i].format(dateformat)) {
            isBound = true
          }
        } else {
          if (savedDay.format(dateformat) === durationArr[i].format(dateformat)) {
            isBetween = true
          }
        }
      }
      curWeek.push(<CurrentDay
         key={j}
         isBound={isBound}
         isBetween={isBetween}
         isCurMonth={isCurMonth}
         isForbidden={isForbidden}
         savedDay={savedDay}
         onSelect={this.props.onSelect}
      />);
      curDay.add(1,'days');
    }
    return curWeek;
  }

  firstMonday() {
    let today = this.props.today;
    let currentDate = moment(today);
    let day = currentDate.date();
    let firstDay = currentDate.subtract(day-1,'days');
    let weekDay = currentDate.day();
    let firstMonday;
    if (weekDay !== 0) {
      firstMonday = currentDate.subtract(weekDay-1,'days');
    } else {
      firstMonday = currentDate.subtract(6,'days');
    }
    return firstMonday;
  }

  render() {

    let today = this.props.today;
    let todayToString = today.format("MMMM YYYY");
    let curMonth = this.renderMonth();

    return(
      <div>
        <CalendarHeader
          btnChangeYear={this.props.btnChangeYear}
          onLastYear={this.props.onLastYear.bind(this)}
          onLastMonth={this.props.onLastMonth.bind(this)}
          onNextYear={this.props.onNextYear.bind(this)}
          onNextMonth={this.props.onNextMonth.bind(this)}
          today={todayToString}
        />
       <WeekDays />
       <MonthWrapper>
         {curMonth}
       </MonthWrapper>
      </div>
    );
  }

}
