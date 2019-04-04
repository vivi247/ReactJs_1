import React from 'react';
import PlayerAPI from '../playerAPI';
import {Link} from 'react-router-dom';

const FullCricketer =() => (
    <div>
       <ul>
           {
               PlayerAPI.all().map((p)=> (
                   <li key={p.number}>
                        <Link to={`/cricketer/${p.number}`}>
                            {p.name}
                        </Link>
                   </li>
               ))
           }
       </ul>
    </div>
);

export default FullCricketer;