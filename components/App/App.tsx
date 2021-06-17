import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Pages from '../Pages/Pages';
import styled,{css} from 'styled-components';


type Props={};
type State={
   dropMenu:boolean;
};
class App extends React.Component<Props,State> {
    constructor(props:any){
       super(props);

       this.state = {
          dropMenu:false,
       };
       this.toggleDropMenu = this.toggleDropMenu.bind(this);
    }

    toggleDropMenu(dropMenu:boolean){
       this.setState({
          dropMenu:dropMenu,
       })
    }


   
 render(){
   const { dropMenu } = this.state;


    return  <div>
          <Header dropMenu={dropMenu} toggleDropMenu={this.toggleDropMenu}></Header>
               <Pages></Pages>
              <Footer />
       </div>
 }
}
export default App;

