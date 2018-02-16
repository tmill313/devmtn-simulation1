import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Home.css';

export default class BinList extends Component{
    constructor() {
        super();

        this.state = {
            idBin: []
        }

    }

    componentDidMount() {
        axios.get(`/api/binlist/${this.props.match.params.id}`).then(res => {
            this.setState({
                idBin: res.data
            })
        })
    }

render() {
    const newBin = this.state.idBin.map((obj, i) => (
        <div className='binlist-link-container'>
            {obj.toggle === 'true'
            ?
            <div className="binlist-links">
            <Link  className='bin-links' to={`/api/binlist/bincontent/${obj.binid}`}><span>Bin {obj.binid.charAt(1)}</span></Link>
            </div>
            :
            <div  className="binlist-links">
            <Link className="add-inventory-link" to={`/api/binlist/bincontent/${obj.binid}`}><span>+ Add inventory</span></Link>
            </div>
        
        }
        </div>
    ))
    return(
        <div  className="binlist-main-container">
        <header className="header">
            <Link to='/'><button>HOME</button></Link>
        </header>
        <div className='link-outside-container'>
            <div className='binlist-link-container'>
            {newBin}
            </div>
        </div>
        </div>
    )
}








} 