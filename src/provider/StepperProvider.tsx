import { createContext, useReducer } from "react";
import { StepperContext } from "../context/StepperContext";
import { LoadBannerModelState } from "../models/LoadBannerModelState";
import StepperReducer from "../reducer/StepperReducer";


const initialState = new LoadBannerModelState(
    new FormData(),
    "pending", 
    ""
);

export const StepperProvider = ({ children }: any) => {
 
    const [bannerState, dispatch] = useReducer(StepperReducer, initialState);

    function loadBanner(loadBannerState: LoadBannerModelState) {

        dispatch({
            type: "LOAD_BANNER",
            payload: loadBannerState,
        });
    }

    return (
        <StepperContext.Provider value={{
            bannerState,
            loadBanner
        }}>
            {children}
        </StepperContext.Provider>
    )
}