import { LoadBannerModelState } from "../models/LoadBannerModelState";

type TodoAction = 
    | { type: 'LOAD_BANNER', payload: LoadBannerModelState};


export default function appReducer(state:LoadBannerModelState, action : TodoAction) {
    
    switch (action.type) {

      case "LOAD_BANNER":

        return {
          ...state,
          bannerData: action.payload,
        };

      default:
        return state;
    }
  }