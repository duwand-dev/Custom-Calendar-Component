export interface MyDate {
  date: number;
  dateObj: Date;
  isActive: boolean;
  isHoliday: boolean;
  hasNote: boolean;
  isCurrentDate?: Boolean;
}

export interface Note {
  date: Date;
  note: string;
}
