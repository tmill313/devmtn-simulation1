import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class BinContent extends Component{
constructor() {
    super();

    this.state = {
        binCont: [],
        newName: '',
        newPrice: ''
    }
}

componentDidMount() {
    axios.get(`/api/binlist/bincontent/${this.props.match.params.id}`).then(res => {
        this.setState({
            binCont: res.data
        })
})
}
delete(e) {
    axios.delete(`/api/binlist/${e}`).then(res => {

    })
}
handlePrice(e) {
    this.setState({
        newPrice: e.target.value
    })
}
handleName(e) {
    this.setState({
        newName: e.target.value
    })
}
addItem(e) {
    let body = {binname: this.state.newName, price: this.state.newPrice, toggle: 'true', binid: e.binid}
    axios.post(`/api/binlist/${e.binid}`, body).then(res => {

    })
}
render() {
    const newCont = this.state.binCont.map((obj) => (
        <div>
            {obj.toggle === 'true'
            ?
            <div>
            <Link to={`/api/binlist/${obj.shelfid}`}><button>Bin{obj.binid.charAt(1)}</button></Link>
            <h1>Name: 
            <input placeholder={obj.binname}></input></h1>
            <h1>Price:
            <input placeholder={obj.price}></input></h1>
            <button>EDIT</button>
            <Link to={`/api/binlist/${obj.shelfid}`}><button onClick={this.delete(obj.binid)}>DELETE</button></Link>
            </div>
            :
            <div>
            <h1>Name: 
            <input onChange={e => this.handleName(e)}></input></h1>
            {console.log(this.state.newName)}
            <h1>Price:
            <input onChange={e => this.handlePrice(e)}></input></h1>
            <Link to={`/api/binlist/${obj.shelfid}`}><button onClick={this.addItem(obj)}>ADD TO INVENTORY</button></Link>
            </div>
            }
        </div>
    ))
    console.log(this.state.binCont)
    return(
        <div>
            <h1>{this.state.binCont.binid}</h1>
            <Link to='/'><button>HOME</button></Link>
            {newCont}
        </div>
    )
}

}