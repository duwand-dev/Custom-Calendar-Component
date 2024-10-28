import { FC, useEffect, useState } from "react";

interface YearlyViewProps {
  currentYear: number
  onSelect: (year: number) => void
}

const YearlyView: FC<YearlyViewProps> = ({ currentYear, onSelect }) => {
  const [years, setYears] = useState<Array<number>>([]);

  useEffect(() => {
    const temp = [];
    for (let i = 0; i < 10; i++)
      temp.push((currentYear - currentYear % 10) + i);
    setYears(temp)
  }, [currentYear])

  return (
    <div className="w-[350px] flex flex-wrap">
      {/* years */}
      {years.map((val, index) => {
        return (
          <div
            className={`w-[116px] h-[100px] hover:bg-slate-300 flex justify-center items-center border-none select-none cursor-pointer`}
            key={val}
            onClick={() => onSelect((currentYear - currentYear % 10) + index)}
          >
            {val}
          </div>
        );
      })}
    </div>
  );
}

export default YearlyView;
