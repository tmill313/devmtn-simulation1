import React from 'react';
import {Link} from 'react-router-dom';

export default function Home() {
    return(
        <div>
            <Link to='/api/binlist/A'>ShelfA</Link>
            <Link to='/api/binlist/B'>ShelfB</Link>
            <Link to='/api/binlist/C'>ShelfC</Link>
            <Link to='/api/binlist/D'>ShelfD</Link>
        </div>
    )
}