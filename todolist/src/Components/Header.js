import React from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Input from '@mui/material/Input';

import SummarizeIcon from '@mui/icons-material/Summarize';
import { IconButton } from '@mui/material';


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
        
            <IconButton><SummarizeIcon className='logo'/></IconButton>
            <a className="navbar-brand" href="/">Todo List</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/add"><AddBoxIcon className='plus_nav'/>Add Items</a>
                </li>
                {/* <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
                </li> */}
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header