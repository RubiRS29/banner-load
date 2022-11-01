export class LoadBannerModelState {

    formData: FormData;
    status: string;
    notIncludes: String[];
  
    constructor( formData: FormData, 
      status: string, 
      image: String[] ) {
      this.formData = formData;
      this.status = status;
      this.notIncludes = image;
    }
  
  }