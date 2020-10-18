export const SPACEDETAIL =  'SPACEDETAIL';
export type SPACEDETAIL = typeof SPACEDETAIL;
export const SPACEDETAIL_SUCCESS = 'SPACEDETAIL_SUCCESS';
export type SPACEDETAIL_SUCCESS = typeof SPACEDETAIL_SUCCESS;
export const SPACEDETAIL_FAILURE = 'SPACEDETAIL_FAILURE';
export type SPACEDETAIL_FAILURE = typeof SPACEDETAIL_FAILURE;

export const SPACEDETAILBASISOFYEAR =  'SPACEDETAILBASISOFYEAR';
export type SPACEDETAILBASISOFYEAR = typeof SPACEDETAILBASISOFYEAR;
export const SPACEDETAILBASISOFYEAR_SUCCESS = 'SPACEDETAILBASISOFYEAR_SUCCESS';
export type SPACEDETAILBASISOFYEAR_SUCCESS = typeof SPACEDETAILBASISOFYEAR_SUCCESS;
export const SPACEDETAILBASISOFYEAR_FAILURE = 'SPACEDETAILBASISOFYEAR_FAILURE';
export type SPACEDETAILBASISOFYEAR_FAILURE = typeof SPACEDETAILBASISOFYEAR_FAILURE;


export interface SpaceDetails {
    type: SPACEDETAIL;
}
export interface SpaceDetailBasisOfAll{
    type: SPACEDETAILBASISOFYEAR;
    payload:any
}
export interface SpaceDetailBasisOfAllSuccess {
    type: SPACEDETAILBASISOFYEAR_SUCCESS;
}
export interface SpaceDetailBasisOfAllFailure {
    type: SPACEDETAILBASISOFYEAR_FAILURE;
}
export type SpaceActions = SpaceDetails | SpaceDetailBasisOfAll;
export default class SpaceDetailsActions {
    public static SpaceDetails(): SpaceDetails {
        return {
            type: SPACEDETAIL
        };
    }
    public static SpaceDetailsAll(year:string, launchSuccess: string , landingSuccess: string):  SpaceDetailBasisOfAll{
        return {
            type: SPACEDETAILBASISOFYEAR, 
            payload:{
                launchSuccess: launchSuccess,
                year:year,
                landingSuccess:landingSuccess
            }
        }
    }
    public static SpaceDetailsAllSuccess():  SpaceDetailBasisOfAllSuccess{
        return {
            type: SPACEDETAILBASISOFYEAR_SUCCESS, 
        }
    }
    public static SpaceDetailsAllFailure():  SpaceDetailBasisOfAllFailure{
        return {
            type: SPACEDETAILBASISOFYEAR_FAILURE, 
        }
    }
}