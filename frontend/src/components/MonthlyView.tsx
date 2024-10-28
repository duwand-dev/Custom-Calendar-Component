import React, { useEffect, useState } from "react";

const monthsNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function MonthlyView(props: { onSelect: (month: number) => void }) {

  return (
    <div className="w-[350px] flex flex-wrap">
      {/* months */}
      {monthsNames.map((val, index) => {
        return (
          <div
            className={`w-[50px] h-[100px] hover:bg-slate-300 flex justify-center items-center border-none select-none cursor-pointer`}
            key={val}
            onClick={() => props.onSelect(index)}
          >
            {val}
          </div>
        );
      })}
    </div>
  );
}

export default MonthlyView;
