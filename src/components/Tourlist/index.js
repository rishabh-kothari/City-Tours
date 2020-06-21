import React, { Component } from 'react'
import "./tourlist.scss";
import Tour from "../Tours/tour";
import { tourData } from "../tourData"

export default class Tourlist extends Component {
    state= {
        tours: tourData
    };
    removeTour= id=> {
        const{tours}=this.state;
        const sorted= tours.filter(tour=> tour.id !==id);
        this.setState({
            tours:sorted
        })
    }
    render() {
        const{tours}=this.state;
        return (
            <section className="tourlist">
                {tours.map(tour => {
                    return <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>;
                })}
            </section>
        )
    }
}

