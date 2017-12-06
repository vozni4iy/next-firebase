import React, { Component } from 'react';
import { CHeader } from 'src/components/styled'

export const CalendarHeader = ({
  btnChangeYear, onLastYear, onLastMonth, onNextYear, onNextMonth, today}) => (
  <CHeader>
    {(btnChangeYear) ? <button onClick={onLastYear}>LY</button> : null}
    <button onClick={onLastMonth}>LM</button>
    <div>{today}</div>
    <button onClick={onNextMonth}>NM</button>
    {(btnChangeYear) ? <button onClick={onNextYear}>NY</button> : null}
  </CHeader>
);

export default CalendarHeader;
