import { createContext } from "react";
import { LoadBannerModelState } from "../models/LoadBannerModelState";


export type StepperContextProps = {
    bannerState: LoadBannerModelState;
    loadBanner: (loadBannerState: LoadBannerModelState) => void;
} 


export const StepperContext = createContext<StepperContextProps>({} as StepperContextProps );
