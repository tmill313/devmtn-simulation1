import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:700');
</style>

export default function Home() {
    return(
        <div className="main-container">
        <header className="header"></header>
        <div className="link-outside-container">
        <div className="link-container">
            <Link className="links" to='/api/binlist/A'><span>Shelf A</span></Link>
            <Link className="links" to='/api/binlist/B'><span>Shelf B</span></Link>
            <Link className="links" to='/api/binlist/C'><span>Shelf C</span></Link>
            <Link className="links" to='/api/binlist/D'><span>Shelf D</span></Link>
        </div>
        </div>
        </div>
    )
}