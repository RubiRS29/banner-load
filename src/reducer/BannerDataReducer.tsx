import { BannerDataModel } from "../models/BannerDataModel";

const calendarData = {

    daysCalendar: [
        {
            'date': '09 November 2022',
            'position': "bottom",
            'mode': "DYI",
            'language': "es_MX"
        },

        {
            'date': '10 November 2022',
            'position': "bottom",
            'mode': "CUSTOMER",
            'language': "es_MX"
        },

        {
            'date': '10 November 2022',
            'position': "bottom",
            'mode': "DYI",
            'language': "es_MX"
        },

        {
            'date': '30 November 2022',
            'position': "bottom",
            'mode': "DYI",
            'language': "es_MX"
        }

        , {
            'date': '22 November 2022',
            'position': "bottom",
            'mode': "CUSTOMER",
            'language': "es_MX"
        },
        {
            'date': '22 November 2022',
            'position': "bottom",
            'mode': "CUSTOMER",
            'language': "es_MX"
        }
        ,
        {
            'date': '30 Dicember 2022',
            'position': "bottom",
            'mode': "DYI",
            'language': "es_MX"
        }

        , {
            'date': '29 July 2022',
            'position': "bottom",
            'mode': "CUSTOMER",
            'language': "es_MX"
        },
        {
            'date': '29 July 2022',
            'position': "bottom",
            'mode': "CUSTOMER",
            'language': "es_MX"
        }
    ]

};

type BannerAction =
    | { type: 'SET_BANNER_BY_DATE', payload: { date: string } }
    | { type: 'SET_BANNER_BY_MODE', payload: { mode: string } }

export default function bannerDataReducer(state: BannerDataModel[], action: BannerAction) {

    const bannerDataArray: BannerDataModel[] = calendarData.daysCalendar.map((banner) => { return banner as BannerDataModel })

    switch (action.type) {

        case "SET_BANNER_BY_DATE":
            console.log(bannerDataArray.filter((banner) => banner.date == action.payload.date) ? bannerDataArray.filter((banner ) => banner.date == action.payload.date) : [])
            return bannerDataArray.filter((banner) => banner.date == action.payload.date) ? bannerDataArray.filter((banner ) => banner.date == action.payload.date) : []
            ;

        case "SET_BANNER_BY_MODE":
            console.log(bannerDataArray.filter((banner) => banner.mode == action.payload.mode) ? bannerDataArray.filter((banner) => banner.mode == action.payload.mode) : [])
            return bannerDataArray.filter((banner)=> banner.mode == action.payload.mode) ? bannerDataArray.filter((banner) => banner.mode == action.payload.mode) : []
           
        default:
            return state;
    }
}