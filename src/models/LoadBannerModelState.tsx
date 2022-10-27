export class LoadBannerModelState {

    formData: FormData;
    status: string;
    image: string | ArrayBuffer | null;
  
    constructor( formData: FormData, status: string, image: string | ArrayBuffer | null ) {
      this.formData = formData;
      this.status = status;
      this.image = image;
    }
  
  }