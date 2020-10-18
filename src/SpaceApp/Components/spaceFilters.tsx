import React from "react";
import { SpaceDefaultState } from "../../State/spaceState";
import history from '../../history';
export interface Props {
    details:SpaceDefaultState[];
    years:any[];
    launch:any[];
    landing:any[];
    sendAll:(year:string, launchSuccess:string, landingSuccess: string) => void;
}
export interface State {
    launchSuccess: string,
    landingSuccess: string,
    year: string
}

export default class SpaceFilters extends React.Component <Props ,State >{
 constructor(props: Props) {
        super(props);
        this.state = {
            launchSuccess: "",
            landingSuccess: "",
            year:" "
        }
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-12" id="mid-head">
                    Filters
                </div>
                <div className="col-md-12" id="filter-head">
                    Launch Year
                </div>
                {this.props.years.map((item ,i) => {
                    return( <button key={i} className={this.state.year === item ? ' filter-selected' :'filter-btn' }  onClick={() => this.sendInfo(item,"year")}>{item}</button>
                )})}
                <div className="col-md-12"id="filter-head" >
                    Successful Launch
                </div>
                {this.props.launch.map((item, i) => {
                    return (
                    <button key={i} className={this.state.launchSuccess === item ? 'col-md-5 filter-selected' :' col-md-5 filter-btn' } onClick={() => this.sendInfo(item ,"launchSuccess")}>{item}</button>)
                    ;
                })}
                <div className="col-md-12" id="filter-head">
                    Successful landing
                </div>
                {this.props.landing.map((item, i) => {
                        return (<button key={i} className={this.state.landingSuccess === item ? 'col-md-5 filter-selected' :' col-md-5 filter-btn' } onClick={() => this.sendInfo(item ,"landingSuccess")}>{item}</button>);
                })}
            </div>
        )
    }
    sendInfo(item: string, type:string){
     if(type === "year"){
         this.setState({year:item});
         this.props.sendAll(item ,this.state.launchSuccess, this.state.landingSuccess);

     } else if(type === "launchSuccess"){
         this.setState({launchSuccess:item });
         this.props.sendAll(this.state.year ,item, this.state.landingSuccess);

     }else {
        this.setState({landingSuccess:item });
        this.props.sendAll( this.state.year,this.state.launchSuccess, item);
     }
    history.push("/space");
 }
}