import React from 'react'
import "./styles/Home.css"
import { Link } from "react-router-dom"
import AppsIcon from "@material-ui/icons/Apps"
import { Avatar } from "@material-ui/core"
import logo from './googlelogo.png'
import Search from './Search'

function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <div></div>
                <div className="home__headerright">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon className="home__headerright_appicon"/>
                    <Avatar/>
                </div>

            </div>

            <div className="home__body">
                <img src={logo} alt="" />
                <div className="home__input">
                    <Search/>
                </div>                
            </div>
            
        </div>
    )
}

export default Home
