export class BannerDataModel {

    date: string;
    position: string;
    mode: string;
    language: string;
  
    constructor(
      date: string, 
      position: string, 
      mode: string,
      language: string) {
        
      this.date = date;
      this.position = position;
      this.mode = mode;
      this.language = language;

    }
  
  }