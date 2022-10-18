import React, {useEffect,useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PostDetail=(props)=>{
    const [postDetail,setPostDetail] = useState({})
    const [user,setUser] = useState('')
    const [comments,setComments] = useState([])

    const {id} = props.match.params

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response)=>{
                setPostDetail(response.data)
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[id])

    useEffect(()=>{
        if(Object.keys(postDetail).length>0){
        axios.get(`https://jsonplaceholder.typicode.com/users/${postDetail.userId}`)
            .then((response)=>{
                setUser(response.data)
            })
            .catch((err)=>{
                alert(err.message)
            })}
    },[postDetail])

    useEffect(()=>{
        if(Object.keys(postDetail).length>0){
        axios.get(`https://jsonplaceholder.typicode.com/comments/?postId=${postDetail.id}`)
            .then((response)=>{
                setComments(response.data)
            })
            .catch((err)=>{
                alert(err.message)
            })}
    },[postDetail])


    return(
        <div>
            <h2>Post details of user: {user.name}</h2>
            <h3>Title: {postDetail.title}</h3>
            <h3>Body:<br/> &nbsp;&nbsp;&nbsp;&nbsp; {postDetail.body}</h3>
            <hr/>
            <h2>Comments</h2>
            <ul>
                {
                    comments.map((com)=>{
                        return <li key={com.id} > {com.body} </li>
                    })
                }
            </ul>

            <hr/>
            <Link to={`/users/${user.id}`}>➨ more posts of author {user.name}</Link>
        </div>
    )
}

export default PostDetail