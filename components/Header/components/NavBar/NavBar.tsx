import React from 'react';
import styled,{css} from 'styled-components';
import Item from './components/Item/Item';
import LogoPic from '../../../../assets/logo.jpg';
import CSSCONST from '../../../../cssConst';
import littleLogo1 from '../../../../assets/littleLogo1.png';
import littleLogo2 from '../../../../assets/littleLogo2.png';
import LittleLogo from './components/LittleLogo/LittleLogo';
import Button from './components/Button/Button';
import Pages from '../../../Pages/Pages';
import { PAGE } from '../../../../PAGE';

interface Props {
    show:string;
}
const NavBarCenter = styled.div`
       width: 100%;
       display: flex;
       justify-content: center;
       background-color: white;
       opacity: 0.9;
  `;
const NavBarContainer = styled.div`
      width: 1200px;
       @media only screen and (max-width: 800px){
       margin-right: 1rem;
       margin-left: 1rem;
       width: 650px;
    }
    @media only screen and (max-width: 1312px){
     width: 1100px;
    }
    @media only screen and (max-width: 1200px){
     width: 1000px;
    }
    @media only screen and (max-width: 1092px){
     width: 900px;
    }
    @media only screen and (max-width: 894px){
     width: 820px;
    }
`;
const NavBarContainerSpace = styled.div`
     display: flex;
     justify-content: space-between;

`;
const Logo = styled.img`
   max-width: 182px;
   max-height: 139px;
   @media only screen and (max-width: 800px){
        display: none;
    }
    
`;
const Warper = styled.div`
   display: flex;
   justify-content: center;
   height: 100%;
   width: fit-content;
   margin-left: 0.5rem;

`;

Logo.defaultProps = {
    src:LogoPic,
}

const Navbar = styled.nav<Props>`
        font-family: ${CSSCONST.FONT_ZILLA};
        font-size: 18px;
        
   @media only screen and  (max-width:800px){
        display: ${p => p.show};
        flex-direction: column;
        height: 100%;
        width: 100%;
        justify-content: center;
        margin-top: 40px;
    }
       @media only screen and (min-width: 801px){
           display: flex;
           max-width: 35%;
           width: 100%;
           justify-content: space-around; 
           position: relative;
       }
`;

const Name = styled.div`
    @media only screen and (max-width:800px){
      display: flex;
      justify-content: center;
      align-items: flex-end;
      font-family: ${CSSCONST.FONT_ZILLA};
      font-size: 28px;
      height: 80px;
    }
    @media only screen and (min-width: 801px){
        display: none;
    }
`;
const SmallScreenWarper =styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;

       @media only screen and (min-width:801px){
           display: none;
       }
       @media only screen and (max-width: 800px){
        max-width: 750px;
        width: 100%;
    }
    @media only screen and (max-width: 744px){
        width: 700px;
    }
    @media only screen and (max-width: 646px){
        width: 650px;
    }
    @media only screen and (max-width: 500px){
        width: 550px;
    }
    @media only screen and (max-width: 400px){
        width: 500px;
    }

`;
const DisapearWhenSmall = styled.div`
  @media only screen and (max-width:800px){
           display: none;
       }
`;

const ITEMS = [{
    key:'home',
    tabPage:PAGE.HOME,
},{
    key:'about',
    tabPage:PAGE.ABOUT,
},{
    key:'menus',
    tabPage:PAGE.MENUS,
},{
    key:'upcomingEvents',
    tabPage:PAGE.UPCOMMING,
},{
    key:'contact',
    tabPage:PAGE.CONTACT,
},]

const NavBar = (props:{dropMenu:boolean, toggleDropMenu:(dropMenu:boolean)=>void,changePage:(pageName:string)=>void,currentPage:String})=>{
  let showOrNot;
  if(props.dropMenu){
      showOrNot = 'flex';
  }else{
      showOrNot = 'none'
  }
  return <NavBarCenter>
    <NavBarContainer>
              <NavBarContainerSpace>
              <Logo />
              <SmallScreenWarper>
              <Button dropMenu={props.dropMenu} toggleDropMenu={props.toggleDropMenu}></Button>
               <Name>SEA LIFE</Name>
               <Warper>
               <LittleLogo src={littleLogo1}></LittleLogo>
               <LittleLogo src={littleLogo2}></LittleLogo>
               </Warper>
              </SmallScreenWarper>

               <Navbar show = {showOrNot}>
               {ITEMS.map((item) => (
                   <Item active={props.currentPage === item.tabPage} key={item.key} 
                   onclick={()=>{ props.changePage(item.tabPage);
                   }}>{item.tabPage}</Item>
               ))}
               </Navbar>

               <DisapearWhenSmall>
               <Warper>
               <LittleLogo src={littleLogo1}></LittleLogo>
               <LittleLogo src={littleLogo2}></LittleLogo>
               </Warper>
               </DisapearWhenSmall>

              </NavBarContainerSpace>
    </NavBarContainer>

    </NavBarCenter> 

}

export default NavBar;


