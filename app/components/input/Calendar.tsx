"use client";
import React from "react";
import { DateRange, Range, RangeKeyDict } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
interface CalendarProps {
  value: Range;
  onChange: (date: RangeKeyDict) => void;
  disableDates?: Date[];
}
export default function Calendar({
  disableDates,
  onChange,
  value,
}: CalendarProps) {
  return (
    <DateRange
      rangeColors={["#262626"]}
      ranges={[value]}
      date={new Date()}
      onChange={onChange}
      direction="vertical"
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disableDates}
    />
  );
}
