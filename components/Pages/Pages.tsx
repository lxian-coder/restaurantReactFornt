import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../cssConst';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import EVENTS from './components/Events/Events';
import { Switch, Route, withRouter, RouteComponentProps} from 'react-router-dom';
import ScrollToTop from '../../ScrollToTop/ScrollToTop';
import { PAGE } from '../../PAGE';


const PageWarper = styled.div`
     display: flex;
     justify-content: center;
     z-index: 0;
     margin-top: 15.625rem;
       width:100%;
       overflow-x: hidden;
     @media only screen and (max-width:700px){
       margin-top:10rem;
}
     `;

interface Props extends RouteComponentProps{
   changePage:(s:string)=>void;
};
interface State {
  name:string;
}

let UNLISTEN : any;

const map = new Map();
map.set('/HOME',PAGE.HOME);
map.set('/CONTACT',PAGE.CONTACT);
map.set('/MENUS',PAGE.MENUS);
map.set('/UPCOMING EVENTS',PAGE.UPCOMMING);
map.set('/ABOUT',PAGE.ABOUT);
map.set('/',PAGE.HOME);
class Pages extends React.Component<Props,State>{

   constructor(props:any){
     super(props);
     this.changePageWithURL = this.changePageWithURL.bind(this);
   }
  changePageWithURL(){
    let URL = this.props.history.location.pathname;
    this.props.changePage(map.get(URL));
    console.log("++++++++"+URL);
 
  }
  componentDidMount(){
    // fix the route problem
    this.changePageWithURL();
    UNLISTEN = this.props.history.listen(route =>{
      this.changePageWithURL();
    })
  }
  componentWillUnmount(){
    UNLISTEN && UNLISTEN();
  }
  

  render(){
    return (
      <ScrollToTop >
      <Switch>
      <PageWarper>
        <Route path="/" exact component={Home}></Route> 
        <Route path="/HOME"  component={Home}></Route>  
        <Route path="/CONTACT"  component={Contact}></Route>
        <Route path="/ABOUT"  component={About}></Route>   
       
        <Route path="/MENUS" ><Menu  onclick={()=>{
             this.props.changePage("CONTACT");
             
        }} /></Route>
         <Route path="/UPCOMING EVENTS"  component={EVENTS}></Route>  
  </PageWarper>
      </Switch>
      </ScrollToTop>
);

}
}
export default withRouter(Pages);