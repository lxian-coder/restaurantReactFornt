import React,{useState,useEffect} from 'react';
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

interface Props {
  active:string;
  
}
interface Props2{
  showOrNot:string;
}
interface Props3 {
  show:string;
}

const CATEGORY = [{
  key:'Breakfast',
  value:"breakfast",
},{
   key:'Lunch',
   value:"lunch"
},{
  key:'Lunch Specials',
  value:"lunchSpecial",
},{
  key:'Entrée',
  value:'entrée'
},{
  key:'Main',
  value:'main',
},{
  key:'Dinner Specials',
  value:'dinner',
},{
  key:'Children',
  value:'children',
},{
  key:'Daily Desserts',
  value:'desserts',
},{
  key:'Sparkling & Rose Wine',
  value:'SparklingWine',
},{
  key:'White Wine',
  value:'WhiteWine',
},{
  key:'Red Wine',
  value:'RedWine',
},{
  key:'Beer',
  value:'Beer',
},{
  key:'Cider',
  value:'Cider',
}];


const MenuContainer = styled.div`
 display: flex;
 justify-content: space-between;
 padding-bottom: 2.8rem;
`;

const Title = styled.div`
   padding-bottom: 40px;
   font-size: 48px;
`;
const Ul = styled.ul`
  font-size: 28px;
`;
const Li = styled.li<Props>`
    color: ${p=>p.active};
    &:hover{
       color:black;
       transition: 0.7s;
    }
    padding-bottom:10px;
`;

const BookTable = styled.div`
   font-size: 28px;
   font-family: ${CSSCONST.FONT_ALATA};
   font-weight: 700;
   padding-top: 25px;
   z-index: 1;
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
    justify-content: space-between

`;
const Price1Warper = styled.div`
       width:25px;
       display: flex;
       justify-content: flex-start;
`;

const Price2Warper = styled.div`
    width: 50px;
    display: flex;
    justify-content: flex-start;
    
`;
const MenuSide2Warper =styled.div`
  position: relative;
`;

const Img1Wraper = styled.img`
width: 50%;
position: absolute;
top: 13.5%;
left: 40%;
z-index: 0;

`;

const Img2Wraper = styled.img`
width: 40%;
position: absolute;
top: 51%;
left: 48%;
z-index: 0;
`;
const Img3Wraper = styled.img`
width: 37%;
position: absolute;
top: 91%;
left: 53%;
z-index: 0;
`;
const CategoryBottleWarper = styled.div`
display:flex ;
justify-content: space-between;
`;

const BottleGlassWarper = styled.div<Props2>`
display: ${p=>p.showOrNot};
justify-content: space-between;
`;
const BottleWarper = styled.img`
  width: 1.875rem;
  height: 35px;
  margin-left: 17px;
`;
const SpaceAdd = styled.div<Props3>`
 display: ${p=>p.show};
 width: 100%;
 height: 4.375rem;
`;

const Menu =(props:{onclick:()=>void,currentMeal:string,changeMeal:(meal:string)=>void}) =>{
   　const [items, setItems] = useState([]);

   useEffect(()=>{
       getMenus();
  },[])

   const getMenus = async()=>{ 
     const data = await  axios.get('http://Sealife-env.eba-8gr2micd.ap-southeast-2.elasticbeanstalk.com/menu');
     setItems(data.data);
     console.log(data);
   }

   function scrollToAnchor(anchorName:string){
     if(anchorName){
       let anchorElement = document.getElementById(anchorName);
       console.log(anchorElement);
       if(anchorElement) {
         let anchorPosition = anchorElement.getBoundingClientRect().top + window.pageYOffset;
         console.log("anchorPosition: "+ anchorPosition);
          let offsetPosition = anchorPosition - 270;
        window.scrollTo({top:offsetPosition, behavior:'smooth'});
       };
     }
   }

    return <MenuContainer>
               <Side1Warper>
                 <div style={{position:'fixed'}}>
                 <Title>Menus.</Title>
                 <Ul>
                   <Li onClick={(evt)=>{
                     scrollToAnchor("Breakfast");
                     props.changeMeal(MEAL.BREAKFAST);
                   }} active={props.currentMeal === MEAL.BREAKFAST ? "black" : CSSCONST.GREY }>Breakfast</Li>
                   <Li onClick={(evt)=>{
                     scrollToAnchor("Lunch");
                     props.changeMeal(MEAL.LUNCH);
                   }} active={props.currentMeal === MEAL.LUNCH ? "black" : CSSCONST.GREY }>Lunch</Li>
                   <Li onClick={(evt)=>{
                     scrollToAnchor("Entrée");
                     props.changeMeal(MEAL.DINNER);
                   }}active={props.currentMeal === MEAL.DINNER ? "black" : CSSCONST.GREY }>Dinner</Li>
                   <Li onClick={(evt)=>{
                     scrollToAnchor("Children");
                     props.changeMeal(MEAL.CHILDREN);
                   }} active={props.currentMeal === MEAL.CHILDREN ? "black" : CSSCONST.GREY }>Children</Li>
                   <Li onClick={(evt)=>{
                     props.changeMeal(MEAL.DESSERTS);
                     scrollToAnchor("Daily Desserts");
                   }} active={props.currentMeal === MEAL.DESSERTS ? "black" : CSSCONST.GREY }>Desserts</Li>
                   <Li onClick={(evt)=>{
                     props.changeMeal(MEAL.REFRESHMENTS);
                     scrollToAnchor("Sparkling & Rose Wine");
                   }}active={props.currentMeal === MEAL.REFRESHMENTS ? "black" : CSSCONST.GREY }>Refreshments</Li>
                 </Ul>
                <Link style={{color:"black"}} to="/CONTACT"> <BookTable onClick={(evt)=>{props.onclick()}}>  Book a Table</BookTable> </Link> 
                 </div>
          
               </Side1Warper>
               <Side2Warper >
                 <MenuSide2Warper>
                   <Img1Wraper src={menu1}></Img1Wraper>
                   <Img2Wraper src={menu2}></Img2Wraper>
                   <Img3Wraper src={menu3}></Img3Wraper>

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
                              <div  key={ele.id}>{ele.description}</div>
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
    </MenuContainer>;
}

export default Menu;    

function restaurantProject(arg0: string, restaurantProject: any, any: any) {
  throw new Error('Function not implemented.');
}
