import React, { useEffect, useState } from "react";
import DailyView from "./DailyView";

const fullDayNames = ["Sunday", "Monday", "Tuesday", "Wendesday", "Thursday", "Friday", "Saturday"];
const monthsNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function App() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const toMyFormat = (date: Date) => {
    return `${fullDayNames[date.getDay()]}, ${monthsNames[date.getMonth()]} ${date.getDate()}`;
  };

  return (
    <div className="flex flex-col items-center">
      {toMyFormat(currentDate)}
      <div className="w-full flex justify-between">
        <div><button className="w-[40px] h-[40px] hover:bg-slate-200">&lt;</button><button className="w-[40px] h-[40px] hover:bg-slate-200">&gt;</button></div>
        <div className="flex">
          <div className="h-[40px] hover:bg-slate-200 flex items-center cursor-pointer p-2">Monthly</div>
          <div className="h-[40px] hover:bg-slate-200 flex items-center cursor-pointer p-2">Yearly</div>
        </div>
      </div>
      <DailyView />
    </div>
  );
}

export default App;
