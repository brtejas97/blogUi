import React from "react";
import {Link,Route} from 'react-router-dom'
import './App.css'

import Home from "./Home";
import Users from "./Users";
import Posts from "./Posts";
import UsersPosts from "./UsersPosts";
import PostDetail from "./PostDetail";

const App=(props)=>{

    return(
        <div id="app">
            <h2 id="heading">Blog</h2>
            <Link to='/' > <b> Home </b> </Link> |
            <Link to='/users' > <b> Users </b> </Link> |
            <Link to='/posts' > <b> Posts </b> </Link>
            <hr/>

            <Route path='/' component={Home} exact={true}/>
            <Route path='/users' component={Users} exact={true} />
            <Route path='/posts' component={Posts} exact={true} />
            <Route path='/users/:id' component={UsersPosts} />
            <Route path='/posts/:id' component={PostDetail} />
        </div>
    )
}

export default App