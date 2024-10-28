import React, { useEffect, useState } from "react";
import Holidays, { HolidaysTypes } from "date-holidays";

import Cell from "./Cell";
import { MyDate, Note } from "../types/types";

const days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
const fullDayNames = ["Sunday", "Monday", "Tuesday", "Wendesday", "Thursday", "Friday", "Saturday"];
const monthsNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MILLSPERDAY = 86400000;

function DailyView(props: { currentDate: Date, onSelect: (date: number) => void }) {
  const [currentDate, setCurrentDate] = useState<Date>(props.currentDate);
  const [holidays, setHolidays] = useState<HolidaysTypes.Holiday[]>([]);
  const [dates, setDates] = useState<Array<MyDate>>([]);
  const [notes, setNotes] = useState<Array<Note>>([]);

  useEffect(() => {
    const hd = new Holidays("US");
    const currentYear = currentDate.getFullYear();
    const usHolidays = hd.getHolidays(currentYear);
    setHolidays(usHolidays);
  }, []);

  useEffect(() => {
    setCurrentDate(props.currentDate);
  }, [props]);

  useEffect(() => {
    const temp: Array<MyDate> = [];
    const datesForMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const year = currentDate.getFullYear(),
      month = currentDate.getMonth(),
      date = currentDate.getDate();
    if (isSpecial(year)) datesForMonth[1] = 29;
    const startDay = new Date(year, month, 1).getDay(),
      count = 7 - ((datesForMonth[month] + startDay) % 7);

    // Previous month
    for (let i = 0; i < startDay; i++) {
      const tempDate = new Date(
        new Date(year, month, 1).valueOf() - MILLSPERDAY * (startDay - i)
      );
      temp.push({
        date: datesForMonth[(month + 11) % 12] - startDay + i + 1,
        isActive: false,
        isHoliday: false,
        hasNote: false,
        dateObj: tempDate,
      });
    }

    // Current month
    for (let i = 0; i < datesForMonth[month]; i++) {
      temp.push({
        date: i + 1,
        isActive: true,
        isHoliday: false,
        hasNote: false,
        isCurrentDate: i === date - 1 ? true : false,
        dateObj: new Date(year, month, i + 1),
      });
    }

    // Next month
    for (let i = 0; i < count; i++) {
      const tempDate = new Date(
        new Date(year, month, datesForMonth[month]).valueOf() +
        MILLSPERDAY * (i + 1)
      );
      temp.push({
        date: i + 1,
        isActive: false,
        isHoliday: false,
        hasNote: false,
        dateObj: tempDate,
      });
    }

    setDates(temp);
  }, [currentDate]);

  const isSpecial = (year: number) => {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
  };

  const toMyFormat = (date: Date) => {
    return `${fullDayNames[date.getDay()]}, ${monthsNames[date.getMonth()]} ${date.getDate()}`;
  };

  const isHoliday = (date: Date) => {
    return date.getDay() === 0 || holidays.filter(
      (val) => toMyFormat(new Date(val.date)) === toMyFormat(date)
    ).length;
  };

  const createNote = (date: Date, index: number) => {
    const noteString = window.prompt("Leave your note for this day");
    const note = noteString === null ? "" : noteString;

    let tempNotes = new Array<Note>(...notes);
    const ind = tempNotes.findIndex((note) => note.date.toString() === date.toString());
    if (ind < 0) {
      if (note.length === 0) return;
      tempNotes.push({ date: date, note: note })
    }
    else {
      if (note.length === 0) {
        tempNotes.splice(ind, 1);
      }
      else tempNotes[ind].note = note;
    }

    setNotes(tempNotes);
  };

  return (
    <div className="w-[350px] flex flex-wrap">
      {/* days */}
      {days.map((val) => {
        return (
          <div
            className={`w-[50px] h-[40px] flex justify-center items-center border-none select-none cursor-pointer`}
            key={val}
          >
            {val}
          </div>
        );
      })}
      {/* dates */}
      {dates.map((date, index) => {
        return (
          <Cell
            key={date.dateObj.valueOf()}
            color={isHoliday(date.dateObj) ? "red-500" : date.isActive ? "gray-800" : "gray-400"}
            bgcolor={date.isCurrentDate ? "blue-400" : "white"}
            label={date.date.toString()}
            onClick={createNote}
            dateObj={date.dateObj}
            index={index}
            hasNote={notes.filter(note => date.dateObj.toString() === note.date.toString()).length ? true : false}
          />
        );
      })}
    </div>
  );
}

export default DailyView;
