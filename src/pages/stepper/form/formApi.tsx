import axios from "axios";

export async function loadBannerApi(formData : FormData) {

    let url = process.env.REACT_APP_API + 'upload/'
    await axios.post(url, formData, {headers:{'Content-Type': 'multipart/form-data'}})
    .then(response =>{
        console.log(response.data);
        
    }).catch(error=>{
        console.log(error)
    })
    
}