import React from "react";
import Loader from "../../loader";
import { SpaceDefaultState } from "../../State/spaceState";
export interface Props {
    details: SpaceDefaultState[];
    filterLoader?: boolean;
}
export default class SpaceData extends React.Component<Props, {}>{
    constructor(props: Props) {
        super(props);
    }
    render() {
        return (
            this.props.filterLoader ? <Loader /> :
                this.props.details !== undefined && this.props.details.map((item, i) => {
                    return (<div className="card" key={i} style={{ display: "inline-block" }} id="ind-card">
                        <div className="view overlay image-outer" >
                            <img className="card-img-top" style={{ width: "50%", marginLeft: "60px" }} src={item.links.mission_patch_small} alt="Card image cap" />
                            <a href="#!">
                                <div className="mask rgba-white-slight"></div>
                            </a>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title font-weight-bold"><a></a></h4>
                            <p>{item.mission_name + '#' + item.flight_number}</p>

                            <span id="mid-head">Mision Ids:</span>
                            <ul>
                                <li>{"list:MisionIds"}</li>
                            </ul>
                            <p>
                                <span id="mid-head">Launch Year: </span>
                                <span>{item.launch_year}</span>
                            </p>
                            <p>
                                <span id="mid-head"> Successful launch:</span>
                                <span>{"item.launch_success"}</span>
                            </p>
                            <p>
                                <span id="mid-head">Successful landing:</span>
                                <span>{"item.upcoming"}</span>
                            </p>
                        </div>
                    </div>
                    );
                })
        )
    }
}