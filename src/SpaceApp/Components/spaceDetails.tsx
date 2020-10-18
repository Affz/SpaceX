import React from "react";
import { SpaceDefaultState } from "../../State/spaceState";
import SpaceData from "./spaceData";
import SpaceFilters from "./spaceFilters";
import { History } from 'history';
import Loader from "../../loader";

export interface Props {
    getSpaceDetails: () => void;
    sendAll:(year:string, launchSuccess:string, landingSuccess: string) => void;
    details:SpaceDefaultState[];
    history: History;
    filteredAllResults:SpaceDefaultState[];
    filterLoader: boolean;
}
export interface State {
    filteredAllResults:SpaceDefaultState[];
}
export default class SpaceDetails extends React.Component <Props,State >{
 constructor(props: Props) {
        super(props);
        this.state ={
            filteredAllResults:[] 
        }
    }
    componentDidMount() {
        this.props.getSpaceDetails();
    }
    render(){
        return (
            <div className="row" >
                {this.props.details !== undefined  && this.props.details.length > 0 ?
                <div className="col-md-12" id="outer-comp">
                    <div className="row">
                        <div className="col-md-12" id="main-head">
                            SpaceX Launch Programs
                        </div>
                    </div>
                    <div className="row">
                       <div className="col-md-2" id="filter-comp">
                           <SpaceFilters  sendAll={(year:string,launchSuccess: string , landingSuccess: string) =>{this.props.sendAll(year, launchSuccess,landingSuccess)}}  details={this.props.details} years ={this.getYears()} launch={["true","false"]} landing={["true","false"]}/>
                       </div>
                        {this.state.filteredAllResults.length === 0 ?
                            <div className="col-md-10">
                                <SpaceData details={this.props.details} />
                            </div>
                            :
                            <div className="col-md-10">
                                <SpaceData details={this.state.filteredAllResults} filterLoader={this.props.filterLoader} />
                            </div>
                        }
                    </div>
                    <div className="row">
                        <div className="col-md-2"/>
                        <div className="offset-4 col-md-6">
                            <span id="footer-head">Developed by: </span>
                            <span id="footer-head-name">  Afrin</span>
                        </div>
                        </div>
    
                </div>
                :
                <div className="offset-4 col-md-8">
                <Loader/>
                </div>
        }
            </div>
        )
    }
    getYears(){
        var years:any[] =[];
        var resArr:any[] =[];
        if(this.props.details !== undefined){
            for(var i = 0 ; i < this.props.details.length;i++){
                years.push(this.props.details[i].launch_year);
            }
            years.forEach((element) => {
                if(!resArr.includes(element)){
                    resArr.push(element);
                }
            })
        }
     return resArr;
    }
    componentDidUpdate(prevProps:any){
            if(prevProps.filteredAllResults !== this.props.filteredAllResults){
               this.setState({filteredAllResults:this.props.filteredAllResults})
            }
    }
}