import React,{useState,useEffect, Component} from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../../../cssConst';
import {Side1Warper} from '../Side1/Side1';
import {Side2Warper} from '../SIde2/Side2';

import {Line,ImgContainer,PageContainer,Iframe} from '../utils/Tools';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { MEAL } from '../../../../MEAL';
import menu1 from '../../../../assets/menu1.png';
import menu2 from '../../../../assets/menu2.jpg';
import menu3 from '../../../../assets/menu3.jpg';
import bottle from '../../../../assets/bottle.jpg';
import glass from '../../../../assets/glass.jpg';
import {CATEGORY} from '../../../../Category';
import MenuBar from './components/MenuBar';


interface Props2{
  showOrNot:string;
}
interface Props3 {
  show:string;
}

const MenuContainer = styled.div`
 display: flex;
 justify-content: space-between;
 padding-bottom: 2.8rem;
 width: 100%;
`;

const Category = styled.div`
    font-size:24px;
    font-family:${CSSCONST.FONT_ASAR};
    padding-bottom: 10px;
`;
const UL = styled.ul`
    padding-bottom:35px;
    font-family:${CSSCONST.FONT_ASAR};
    z-index: 1;
    position: relative;
`;
const LiLine =styled.li`
     display: flex;
     justify-content: space-between;
     font-size: 18px;
     padding-bottom: 9px;
`;
const PriceWarper = styled.div`
    display: flex;
    justify-content: space-between;
    
    min-width: 5.125rem;
    margin-left: 13%;

`;
const Price1Warper = styled.div`
`;

const Price2Warper = styled.div`

`;
const MenuSide2Warper =styled.div`
  position: relative;
`;


const CategoryBottleWarper = styled.div`
display:flex ;
justify-content: space-between;
`;

const BottleGlassWarper = styled.div<Props2>`
display: ${p=>p.showOrNot};
justify-content: space-between;
width: 12%;
min-width: 5.125rem;;
`;
const BottleWarper = styled.img`
  max-height: 35px;
  margin-left: 1.0625rem;
`;
const SpaceAdd = styled.div<Props3>`
 display: ${p=>p.show};
 width: 100%;
 height: 4.375rem;
`;
const ImgStartWraper = styled.img`
width: 50%;
position: absolute;
top: 13.5%;
left: 40%;
z-index: 0;
@media only screen and (max-width:380px){
  top: 14%;

}
`;

const ImgMiddleWraper = styled.img`
width: 40%;
position: absolute;
top: 51%;
left: 48%;
z-index: 0;
@media only screen and (max-width:380px){
  top: 52%;

}
`;
const ImgEndWraper = styled.img`
width: 37%;
position: absolute;
top: 91%;
left: 53%;
z-index: 0;
`;
const DesMenu = styled.div`
 
`;
interface menuData{
  id:number,
  category:string,
  description:string,
  price:string,
  price2:string,
  index:number,
}
const Menu =(props:{onclick:()=>void}) =>{
   　const [items, setItems] = useState([]);

   useEffect(()=>{
       getMenus();
  },[])
  
  function sortIndex(a:menuData,b:menuData) {
    console.log(a.index);
    
    return a.index - b.index;
  }
   const getMenus = async()=>{
     await  axios.get(CSSCONST.BACK_URL+'menu').then((res)=>{
       
			res.data.sort(sortIndex);
			 setItems(res.data)
      
       
     })
   }


    return <PageContainer>
             <MenuContainer>
                <MenuBar onclick={props.onclick}></MenuBar>
               <Side2Warper >
                 <MenuSide2Warper>
                 <ImgStartWraper src={menu1}></ImgStartWraper>
                   <ImgMiddleWraper src={menu2}></ImgMiddleWraper>
                   <ImgEndWraper src={menu3}></ImgEndWraper>

                 {CATEGORY.map(({key,value})=>{
                  return  <UL>
                           <SpaceAdd show={ key === "Lunch" || key ==="Entrée" || key === "Children" || key === "Sparkling & Rose Wine" || key === "Daily Desserts" ? "flex" : "none" }></SpaceAdd>
                          <CategoryBottleWarper >
                          <Category id={key} >{key}</Category>
                          <BottleGlassWarper showOrNot={key==="Sparkling & Rose Wine" || key === "White Wine" || key === "Red Wine" ? "flex":"none"}>
                              <BottleWarper src={glass}></BottleWarper>
                              <BottleWarper src={bottle}></BottleWarper>
                            </BottleGlassWarper>
                            </CategoryBottleWarper>
                            {items.map((ele)=>{
                            if(ele.category === value){
                              return  <LiLine>
                              <DesMenu  key={ele.id}>{ele.description}</DesMenu>
                              <PriceWarper>
                               <Price2Warper>{ele.price2==='' ? '':'$'}{ele.price2}</Price2Warper>
                               <Price1Warper key={ele.id} style={isNaN(ele.price) ? {width:"10.625",justifyContent:"flex-end",whiteSpace:"nowrap"}:{}}>{ele.price === "Price Upon Request" || ele.price ==="" ? "":"$"}{ele.price}</Price1Warper>
                              </PriceWarper>
                          </LiLine>
                      }})}
                  </UL>
                 })}
                 <div style={{fontSize:"24px",fontFamily:CSSCONST.FONT_ASAR}}>Non Alcoholic Drink Available<br/>Menu Indicative Only - Meals and Prices Subject to Change</div>
                   </MenuSide2Warper>
               </Side2Warper>
    </MenuContainer>
    </PageContainer>;
}

export default Menu;

