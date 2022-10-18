import React, {useEffect,useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UsersPosts=(props)=>{
    const {id} = props.match.params

    const [posts,setPosts] = useState([])
    const [name,setName] = useState('')

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((response)=>{
                setPosts(response.data)
            })
            .catch((err)=>{
                alert(err.message)
            })
        
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response)=>{
                setName(response.data.name)
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[])
    
    return(
        <div>
            <h2>Username- '{name.toUpperCase()}' | bearing the id - {id}</h2>
            <h3>Number of posts available from this user - {posts.length}</h3>
            <ul>
                {
                    posts.map((post)=>{
                        return <li key={post.id}> <Link to={`/posts/${post.id}`} >{post.title}</Link> </li>
                    })
                }
            </ul>
        </div>
    )
}

export default UsersPosts