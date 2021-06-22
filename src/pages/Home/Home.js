import React from 'react';
import { Link } from 'react-router-dom';

import Search from '../../components/Search/Search';

import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';

import './Home.css';

function Home() {
    return (
        <div className="home">

            <div className="home__header">
                
                <div className="home__headerRight">
                    
                    {/* <AppsIcon />
                    <Avatar /> */}
                </div>
            </div>

            <div className="home__body">
                <img src="https://i.ibb.co/HHg14vt/logo.png" alt="Logo" />
                
                <div className="home__inputContainer">
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home;