import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Pages from '../Pages/Pages';
import styled,{css} from 'styled-components';
import {BrowserRouter as Router,HashRouter} from 'react-router-dom';
import {PAGE} from '../../PAGE';
import {MEAL} from '../../MEAL';


type Props={};
type State={
   dropMenu:boolean;
   currentPage:string;

};
const url = window.location.href;
const map = new Map();
map.set('http://localhost:8080/#/HOME',PAGE.HOME);
map.set('http://localhost:8080/#/CONTACT',PAGE.CONTACT);
map.set('http://localhost:8080/#/MENUS',PAGE.MENUS);
map.set('http://localhost:8080/#/UPCOMING%20',PAGE.UPCOMMING);
map.set('http://localhost:8080/#/ABOUT',PAGE.ABOUT);
map.set('http://localhost:8080/#/',PAGE.HOME);

class App extends React.Component<Props,State> {
   
   constructor(props:any){
       super(props);

       this.state = {
          dropMenu:false,
          currentPage:map.get(url),
   
       };

       this.toggleDropMenu = this.toggleDropMenu.bind(this);
       this.changePage = this.changePage.bind(this);
       this.checkURL = this.checkURL.bind(this);
     
    }

    toggleDropMenu(dropMenu:boolean){
       this.setState({
          dropMenu:dropMenu,
       })
    }
    
    changePage(pageName:string){
      this.setState({
          currentPage: pageName,
      })

    }
  
    checkURL(){
      const url = window.location.href;
      console.log("haha："+url);
      return url;
   }



 render(){
   const { dropMenu, currentPage } = this.state;

    return  <div>
          <HashRouter >
          <Header dropMenu={dropMenu} toggleDropMenu={this.toggleDropMenu} changePage={this.changePage} currentPage={currentPage}></Header>
               <Pages changePage={this.changePage} ></Pages>
              <Footer />
          </HashRouter>
       </div>
 }
}
export default App;

