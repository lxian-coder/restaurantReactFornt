import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../cssConst';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';

const PageWarper = styled.div`
     display: flex;
     justify-content: center;
     z-index: 0;
     margin-top: 270px;
       width:100%;
     `;

const Pages =()=>{
     
   return (
        <Router>
            <Switch>
            <PageWarper>
              <Route path="/contact" component={Contact}></Route>
              <Route path="/about" component={About}></Route>   
              <Route path="/" component={Home}></Route>   
        </PageWarper>
            </Switch>
        </Router>
       

   );
   

}
export default Pages;
