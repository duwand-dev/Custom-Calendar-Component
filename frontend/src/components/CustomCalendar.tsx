import React, { useEffect, useState } from "react";
import DailyView from "./DailyView";
import { ViewTypes } from "../types/types";
import MonthlyView from "./MonthlyView";
import YearlyView from "./YearlyView";

const fullDayNames = ["Sunday", "Monday", "Tuesday", "Wendesday", "Thursday", "Friday", "Saturday"];
const monthsNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function App() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [viewType, setViewType] = useState<ViewTypes>(ViewTypes.DailyView);

  const toMyFormat = (date: Date) => {
    return `${fullDayNames[date.getDay()]}, ${monthsNames[date.getMonth()]} ${date.getDate()}`;
  };

  const handleSelectDate = (day: number) => {
    const date = new Date(currentDate);
    date.setDate(day);
    setCurrentDate(date);
  }

  const handleSelectMonth = (month: number) => {
    const date = new Date(currentDate);
    date.setMonth(month);
    setCurrentDate(date);
    setViewType(ViewTypes.DailyView)
  }

  const handleSelectYear = (year: number) => {
    const date = new Date(currentDate);
    date.setFullYear(year);
    setCurrentDate(date);
    setViewType(ViewTypes.MonthlyView)
  }

  const handlePrevious = () => {
    const date = new Date(currentDate);
    switch (viewType) {
      case ViewTypes.DailyView:
        if (date.getMonth() === 0) {
          date.setFullYear(date.getFullYear() - 1);
          date.setMonth(11);
        } else {
          date.setMonth(date.getMonth() - 1);
        }
        break;
      case ViewTypes.YearlyView:
        if (date.getFullYear() - 10 > 1969) date.setFullYear(date.getFullYear() - 10);
        break;
    }
    setCurrentDate(date);
  }

  const handleNext = () => {
    const date = new Date(currentDate);
    switch (viewType) {
      case ViewTypes.DailyView:
        if (date.getMonth() === 11) {
          date.setFullYear(date.getFullYear() + 1);
          date.setMonth(0);
        } else {
          date.setMonth(date.getMonth() + 1);
        }
        break;
      case ViewTypes.YearlyView:
        if (date.getFullYear() + 10 < 2050) date.setFullYear(date.getFullYear() + 10);
        break;
    }
    setCurrentDate(date);
  }

  return (
    <div className="flex flex-col items-center h-[500px]">
      {toMyFormat(currentDate)}
      <div className="w-full flex justify-between">
        <div>
          <button className="w-[40px] h-[40px] hover:bg-slate-200" onClick={() => handlePrevious()}>&lt;</button>
          <button className="w-[40px] h-[40px] hover:bg-slate-200" onClick={() => handleNext()}>&gt;</button></div>
        <div className="flex">
          <div className="h-[40px] hover:bg-slate-200 flex items-center cursor-pointer p-2" onClick={() => setViewType(ViewTypes.MonthlyView)}>Monthly</div>
          <div className="h-[40px] hover:bg-slate-200 flex items-center cursor-pointer p-2" onClick={() => setViewType(ViewTypes.YearlyView)}>Yearly</div>
        </div>
      </div>
      {
        viewType === ViewTypes.DailyView ? <DailyView currentDate={currentDate} onSelect={handleSelectDate} /> : viewType === ViewTypes.MonthlyView ? <MonthlyView onSelect={handleSelectMonth} /> : <YearlyView currentYear={currentDate.getFullYear()} onSelect={handleSelectYear} />}
    </div>
  );
}

export default App;
