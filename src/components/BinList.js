import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

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
        <div>
            {obj.toggle === 'true'
            ?
            <div>
            <Link to={`/api/binlist/bincontent/${obj.binid}`}><h1>BIN {obj.binid.charAt(1)}</h1></Link>
            </div>
            :
            <div>
            <h1>BIN {obj.binid.charAt(1)}</h1>
            <Link to={`/api/binlist/bincontent/${obj.binid}`}><button>+ ADD INVENTORY</button></Link>
            </div>
        
        }
        </div>
    ))
    return(
        <div>
            <Link to='/'><button>HOME</button></Link>
            <h1>{this.state.idBin.binid}</h1>
            {newBin}
        </div>
    )
}








} 