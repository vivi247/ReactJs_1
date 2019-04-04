import React from 'react';
import PlayerAPI from '../playerAPI';
import {Link} from 'react-router-dom';

const Player =(props) => {
   
       const player = PlayerAPI.get(
           parseInt(props.match.params.number,10)
       )

       if(!player) {
           return <div>Sorry Player not found</div>
       }

       return(
            <div id='playerDiv' className='container'>
                <h1>{player.name} (#{player.number})</h1>
                <h2>Position: {player.position} </h2>
                <Link className='btn btn-danger' to='/cricketer'>Back</Link>
            </div>
       )
   
};

export default Player;