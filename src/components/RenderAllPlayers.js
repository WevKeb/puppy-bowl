import React from "react";
import fakedata from "../fakedata.json";
// import { fetchAllPlayers, fetchSinglePlayer } from "./API";


const playerList = fakedata.data.players; 


const RenderAllPlayers = () => {
    return ( 
        playerList.map(pup => {
        return (
            <div key={pup.id} className="single-player-card">
                <div className="header-info">
                    <p className="pup-title">{pup.name}</p>
                    <p className="pup-number">#{pup.id}</p>
                </div>
                <img src={pup.imageUrl} />
                <button className="detail-button" data-id={pup.id}>See Details</button>
            </div>
            )  
            } 
        ) 
    );
}

export default RenderAllPlayers