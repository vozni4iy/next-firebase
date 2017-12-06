import React, { Component } from 'react';
import moment from 'moment';
import { CDay } from 'src/components/styled'

export const CurrentDay =
  ({isCurMonth, savedDay, isBound, isBetween, isForbidden, onSelect}) => (
    <CDay
      isForbidden={isForbidden}
      isCurMonth={isCurMonth}
      isBound={isBound}
      isBetween={isBetween}
      onClick={!isForbidden && onSelect}
      value={savedDay.format("DD.MM.YYYY")}>
      {savedDay.date()}
    </CDay>
);

export default CurrentDay;
