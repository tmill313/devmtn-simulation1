import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Home.css'

export default class BinContent extends Component{
constructor() {
    super();

    this.state = {
        binCont: [],
        newName: '',
        newPrice: '',
        editToggle: 'true'
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

updateItem(e) {
    let body = {binname: this.state.newName, price: this.state.newPrice, binid: e.binid}
    axios.put(`/api/binlist/bincontent${e.binid}`, body).then(res => {

    })

    this.setState({
      editToggle: 'true'
})
}
toggleEdit() {
  this.setState({
    editToggle: 'false'
  })
}

render() {
    const newCont = this.state.binCont.map((obj) => (
        <div>
            {obj.toggle === 'true'
            ?
            <div>
            <Link to={`/api/binlist/${obj.shelfid}`}><button>bin{obj.binid.charAt(1)}</button></Link>
            <h1>Name 
            <input className='input-class' placeholder={obj.binname}></input></h1>
            <h1>Price
            <input className='input-class' placeholder={obj.price}></input></h1>
            {this.state.editToggle === 'true' ?

            <button onClick={this.toggleEdit}>EDIT</button>
            :
            <button onClick={this.updateItem(obj)}>SAVE</button>}
            <Link to={`/api/binlist/${obj.shelfid}`}><button onClick={this.delete(obj.binid)}>DELETE</button></Link>
            </div>
            :
            <div>
            <p>Name 
            <input className='input-class' onChange={e => this.handleName(e)}></input></p>
            {console.log(this.state.newName)}
            <p>Price
            <input className='input-class'onChange={e => this.handlePrice(e)}></input></p>
            <Link to={`/api/binlist/${obj.shelfid}`}><button className='add-button' onClick={this.addItem(obj)}>+ Add to inventory</button></Link>
            </div>
            }
        </div>
    ))
    console.log(this.state.binCont)
    return(
    <div className="binlist-main-container">
        <header className="header">        
            <Link to='/'><button>HOME</button></Link>
        </header>
        <div className='link-outside-container'>
            <div className='binlist-link-container'>
            {newCont}
            </div>
        </div>
    </div>
    )
}

}