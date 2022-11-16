import { BannerDataModel } from "../models/BannerDataModel";

const calendarData = {

    daysCalendar: [
        {
            'id' : '1',
            'date': '09 November 2022',
            'position': "bottom",
            'mode': "DYI",
            'language': "es_MX"
        },

        {
            'id' : '2',
            'date': '10 November 2022',
            'position': "bottom",
            'mode': "CUSTOMER",
            'language': "es_MX"
        },

        {
            'id' : '3',
            'date': '10 November 2022',
            'position': "bottom",
            'mode': "DYI",
            'language': "es_MX"
        },

        {
            'id' : '4',
            'date': '30 November 2022',
            'position': "bottom",
            'mode': "DYI",
            'language': "es_MX"
        }

        , 
        {
            'id' : '5',
            'date': '22 November 2022',
            'position': "bottom",
            'mode': "CUSTOMER",
            'language': "es_MX"
        },
        {
            'id' : '6',
            'date': '22 November 2022',
            'position': "bottom",
            'mode': "CUSTOMER",
            'language': "es_MX"
        }
        ,
        {
            'id' : '7',
            'date': '30 Dicember 2022',
            'position': "bottom",
            'mode': "DYI",
            'language': "es_MX"
        }

        , 
        {
            'id' : '8',
            'date': '29 July 2022',
            'position': "bottom",
            'mode': "CUSTOMER",
            'language': "es_MX"
        },
        {
            'id' : '9',
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