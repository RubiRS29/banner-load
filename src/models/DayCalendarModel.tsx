export class DayCalendarModel {

    date: string;
    position: string;
    mode: string;
    country: string;
  
    constructor(
      date: string, 
      position: string, 
      mode: string,
      country: string) {
        
      this.date = date;
      this.position = position;
      this.mode = mode;
      this.country = country;

    }
  
  }