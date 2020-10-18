export default interface SpaceState {
    spaceDefault: SpaceDefaultState[];
    filterAllResults:SpaceDefaultState[];
}

export interface SpaceDefaultState {
    mission_name: string,
    flight_number: number,
    upcoming: boolean,
    launch_success:string,
    launch_year: string,
    launch_date_unix: number,
    launch_date_utc: number,
    launch_date_local: string,
    rocket:RocketDetails,
    links: LinkDetails
   
}
export interface LinkDetails {
    article_link: string,
    mission_patch: string,
    mission_patch_small: string
}
export interface RocketDetails {
    rocket_id:string,
    rocket_name: string,
    rocket_type: string
}