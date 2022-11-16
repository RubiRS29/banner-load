import { createContext } from "react";
import { BannerDataModel } from "../models/BannerDataModel"

//firts create a context with the props passed 
export type BannerDataProps = {
    banner: BannerDataModel[];
    setBannerDataByDate:(date:string) => void;
    setBannerDataByMode:(mode:string) => void;
};

export const BannerDataContext = createContext<BannerDataProps>({} as BannerDataProps );