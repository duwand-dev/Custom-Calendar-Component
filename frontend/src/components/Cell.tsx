import { FC } from "react";
import classNames from "classnames";

import Badge from "./Badge";

interface CellProps {
  color: string;
  label: string;
  bgcolor: string;
  index: number;
  onClick: (date: Date, index: number) => void;
  dateObj: Date;
  hasNote: boolean;
}

const Cell: FC<CellProps> = ({ color, label, bgcolor, index, onClick, dateObj, hasNote }) => {
  const BadgeContainerClass = classNames("w-[50px] h-10 flex flex-col justify-center items-center border-none select-none cursor-pointer", `text-${color}`, `bg-${bgcolor}`);

  return (
    <div
      className={BadgeContainerClass}
      onClick={() => onClick(dateObj, index)}
    >
      {
        hasNote && <Badge />
      }
      {label}
    </div>
  );
};

export default Cell