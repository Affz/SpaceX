import { connect } from 'react-redux';
import SpaceDetailsActions from '../Actions/spaceActions';
import SpaceDetails from '../SpaceApp/Components/spaceDetails';

export function mapStateToProps(appState: any){
 return {
    details: appState.spaceReducer.details,
    filteredAllResults:appState.spaceReducer.filteredAllResults,
    filterLoader:appState.spaceReducer.filterLoader
 }
}
export function mapDispatchToProps(dispatch:any){
    return {
         getSpaceDetails:() => dispatch(SpaceDetailsActions.SpaceDetails()),
         sendAll:(year:string, launchSuccess:string, landingSuccess: string) => dispatch(SpaceDetailsActions.SpaceDetailsAll(year , launchSuccess, landingSuccess))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SpaceDetails as any);