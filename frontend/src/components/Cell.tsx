import React from "react";
import Badge from "./Badge";

export default (props: {
  color: string;
  label: string;
  bgcolor: string;
  index: number;
  onClick: (date: Date, index: number) => void;
  dateObj: Date;
  hasNote: boolean;
}) => {
  const col = `text-${props.color} bg-${props.bgcolor}`;

  return (
    <div
      className={`w-[50px] h-[40px] flex flex-col justify-center items-center border-none select-none cursor-pointer ${col}`}
      onClick={() => props.onClick(props.dateObj, props.index)}
    >
      {
        props.hasNote ? <Badge /> : <></>
      }
      {props.label}
    </div>
  );
};
