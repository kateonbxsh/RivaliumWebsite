import { useEffect, useState } from 'react';
import Hajar from './Hajar';

interface User {

    id: number,
    username: string

}

export default function ListUsers(){

    let [users, setUsers] = useState<User[]>([]);

    async function fetchUsers() {

        try {
            const response = await fetch('http://localhost:8080/api/v1/getAll', {method: "GET", headers: { 
                "Content-Type": "application/json"
            } });
            const data = await response.json();
            setUsers(data as User[]);
        } catch (error) {
            console.log('Error fetching users:', error);
        }

    }

    return (
        <div>
          <Hajar />
          <button onClick={fetchUsers}>Fetch Users</button>
    
          <h2>User List:</h2>
          <ul>
            {users.map((user) => (<>
              <li key={user.id}>{user.id} - {user.username}</li>
              <button onClick={()=>{alert(user.username + " est mis en priorité!")}}>Mettre {user.username} en priorité</button>
              </>
            ))}
          </ul>
        </div>
      );

}
