import React, { useEffect, useState } from "react";

function YearlyView(props: { currentYear: number, onSelect: (year: number) => void }) {
  const [years, setYears] = useState<Array<number>>([]);

  useEffect(() => {
    const temp = [];
    for (let i = 0; i < 10; i++)
      temp.push((props.currentYear - props.currentYear % 10) + i);
    setYears(temp)
  }, [props])

  return (
    <div className="w-[350px] flex flex-wrap">
      {/* months */}
      {years.map((val, index) => {
        return (
          <div
            className={`w-[116px] h-[100px] hover:bg-slate-300 flex justify-center items-center border-none select-none cursor-pointer`}
            key={val}
            onClick={() => props.onSelect((props.currentYear - props.currentYear % 10) + index)}
          >
            {val}
          </div>
        );
      })}
    </div>
  );
}

export default YearlyView;
