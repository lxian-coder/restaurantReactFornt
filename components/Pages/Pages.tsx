import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../cssConst';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import EVENTS from './components/Events/Events';
import { Switch, Route, } from 'react-router-dom';


const PageWarper = styled.div`
     display: flex;
     justify-content: center;
     z-index: 0;
     margin-top: 270px;
       width:100%;
       margin-right: 1rem;
       margin-left: 1rem;
     `;

const Pages =(props:{changePage:(pageName:string)=>void,changeMeal:(meal:string)=>void,currentMeal:string})=>{
     
   return (
            <Switch>
            <PageWarper>
              <Route path="/" exact component={Home}></Route> 
              <Route path="/HOME"  component={Home}></Route>  
              <Route path="/CONTACT" component={Contact}></Route>
              <Route path="/ABOUT" component={About}></Route>   
             
              <Route path="/MENUS" ><Menu currentMeal={props.currentMeal} changeMeal={props.changeMeal} onclick={()=>{
                   props.changePage("CONTACT");
              }} /></Route>
               <Route path="/UPCOMING.EVENTS" exact component={EVENTS}></Route>  
        </PageWarper>
            </Switch>
   );

}
export default Pages;
