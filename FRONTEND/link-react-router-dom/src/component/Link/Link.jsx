import * as React from "react";
import { Link } from "react-router-dom";

const Linkf = () => {


    const users = [
        { id: '1', type: 'planet', name: 'Tatooine' },
        { id: '2', type: 'planet', name: 'Alderaan' },
        { id: '3', type: 'starship', name: 'Death Star' },
        { id: '4', type: 'starship', name: 'CR90 corvette' },
        { id: '5', type: 'starship', name: 'Star Destroyer' },
        { id: '6', type: 'person', name: 'Luke Skywalker' },
        { id: '7', type: 'person', name: 'Darth Vader' },
        { id: '8', type: 'person', name: 'Leia Organa' },
    ];
    
    
    return (
        <div>
          <h1>Users</h1>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <Link to={user.type}>{user.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      );
    
    
};

export default Linkf;