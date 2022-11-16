import { useContext } from "react";
import { BannerDataContext } from "../context/BannerDataContext"

export const BannerDataHook = () => {

    const {banner, setBannerDataByDate, setBannerDataByMode} = useContext( BannerDataContext);

    return {
        banner,
        setBannerDataByDate,
        setBannerDataByMode
    }

}