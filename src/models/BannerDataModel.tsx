export class BannerDataModel {

    id:string
    date: string;
    position: string;
    mode: string;
    language: string;
  
    constructor(
      id:string,
      date: string, 
      position: string, 
      mode: string,
      language: string) {
        
      this.id = id;
      this.date = date;
      this.position = position;
      this.mode = mode;
      this.language = language;

    }
  
  }