import React, {useEffect,useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Posts=(props)=>{
    const [allPosts,setAllPosts] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>{
                setAllPosts(response.data)
            })
            .catch((err)=>{
                alert(err.message)
            })
    })

    return(
        <div>
            <h2>Listing posts from all users - {allPosts.length}</h2>
            
            <div style={{height:'400px',overflowY:'scroll'}}>
            <ul>
                {
                    allPosts.map((post)=>{
                        return <li key={post.id}> <Link to={`/posts/${post.id}`} > {post.title} </Link> </li>
                    })
                }
            </ul>
            </div>
        </div>
    )
}

export default Posts