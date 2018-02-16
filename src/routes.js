import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home.js';
import BinList from './components/BinList.js';
import BinContent from './components/BinContent.js'





export default (
<Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/api/binlist/:id' component={BinList}/>
    <Route exact path='/api/binlist/bincontent/:id' component={BinContent}/>



</Switch>



)