import React, {useEffect,useState} from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

const Users=(props)=>{
    const [users,setUsers] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response)=>{
                setUsers(response.data)
            })
            .catch((err)=>{
                alert(err.message)
            })
    })

    return(
        <div>
            <ul>
            {
                users.map((user)=>{
                    return <li key={user.id}> <Link to={`/users/${user.id}`} > {user.name}</Link> </li>
                })
            }
            </ul>
        </div>
    )
}

export default Users