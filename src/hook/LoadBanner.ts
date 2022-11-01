import { useContext } from 'react';
import { StepperContext } from '../context/StepperContext';


export const LoadBanner = () => {

    const { bannerState, loadBanner } = useContext( StepperContext );

    const { formData, notIncludes } = bannerState;
    
    return {
        formDataBanner: formData,
        loadBanner, 
        notIncludes
    }
}