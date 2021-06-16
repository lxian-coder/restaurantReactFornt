import React from 'react';
import styled from 'styled-components';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';

const HeaderWarper = styled.header`
   display: flex;
   flex-wrap: wrap;
   position: fixed;
   z-index: 10;
   top: 0%;
   margin:auto;


`;


const Header=(props:{dropMenu:boolean, toggleDropMenu:(dropMenu:boolean)=>void})=>{

   return <HeaderWarper>
     <Banner />
     <NavBar dropMenu={props.dropMenu} toggleDropMenu={props.toggleDropMenu}/>
   </HeaderWarper> ;
}

export default Header;