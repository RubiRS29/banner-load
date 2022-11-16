import { useReducer } from "react";
import { BannerDataContext } from "../context/BannerDataContext";
import { CalendarContext } from "../context/CalendarContext";
import { BannerDataModel } from "../models/BannerDataModel";
import bannerDataReducer from "../reducer/BannerDataReducer";


export default function BannerDataProvider({ children }: any) {

   

    const [banner, dispatch] = useReducer(bannerDataReducer, []);

    function setBannerDataByDate(date: string) {
       
        dispatch({
            type: "SET_BANNER_BY_DATE",
            payload: { date },
        });
    }

    function setBannerDataByMode(mode: string) {
       
        dispatch({
            type: "SET_BANNER_BY_MODE",
            payload: { mode },
        });
    }

    return (
        <BannerDataContext.Provider
            value={{
                banner,
                setBannerDataByDate,
                setBannerDataByMode
            }}
        >
            {children}
        </BannerDataContext.Provider>
    );

}
