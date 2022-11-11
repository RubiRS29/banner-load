import { Dayjs } from "dayjs";

export class Calendar {

  monthIndex: number;
  days: Dayjs[][];

  constructor(
    monthIndex: number,
    days: Dayjs[][]) {

    this.monthIndex = monthIndex;
    this.days = days;
  }

}