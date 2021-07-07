import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../../../../cssConst';
import {Side1Warper} from '../../Side1/Side1';
import {MEAL} from '../../../../../MEAL';

interface Props2 {
    active:string;
  }
const Title = styled.div`
   padding-bottom: 40px;
   font-size: 48px;
`;
const Ul = styled.ul`
  font-size: 28px;
`;
const Li = styled.li<Props2>`
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
  type Props={ };
  type State={
      currentMeal:string,
  };



class MenuBar extends React.Component<Props,State>{
   
    constructor(props:any){
        super(props);
        this.state={
            currentMeal:MEAL.BREAKFAST,
        }
        this.changeMeal = this.changeMeal.bind(this);
        this.getScrollTop = this.getScrollTop.bind(this);
    
    }


   changeMeal(meal:string){
            this.setState({
                currentMeal:meal,
            });
    };
    getScrollTop(){
        let top =  window.pageYOffset + 270 ;
        console.log("The top is:"+ top);
        if(top<1086){
            this.changeMeal(MEAL.BREAKFAST);
        } 
         if(top >= 1080 && top <= 2016 ){
          this.changeMeal(MEAL.LUNCH);
        } 
        if(top >= 2017 && top <= 3368 ){
            this.changeMeal(MEAL.DINNER);
          }
        if(top >= 3369 && top <= 3894 ){
            this.changeMeal(MEAL.CHILDREN);
        }
        if(top >= 3895 && top <= 4296 ){
          this.changeMeal(MEAL.DESSERTS);
      }
      if(top >= 4297){
        this.changeMeal(MEAL.REFRESHMENTS);
      }
      
    }
   componentDidMount(){
        window.addEventListener('scroll',this.getScrollTop);
       
   }
   componentWillUnmount(){
       window.removeEventListener("scroll",this.getScrollTop);
   }

    render(){
          return <Side1Warper>
           <div style={{position:'fixed'}}>
           <Title>Menus.</Title>
           <Ul>
             <Li onClick={(evt)=>{
               scrollToAnchor("Breakfast");
               this.changeMeal(MEAL.BREAKFAST);
             }} active={this.state.currentMeal === MEAL.BREAKFAST ? "black" : CSSCONST.GREY }>Breakfast</Li>
             <Li onClick={(evt)=>{
               scrollToAnchor("Lunch");
               this.changeMeal(MEAL.LUNCH);
             }} active={this.state.currentMeal === MEAL.LUNCH ? "black" : CSSCONST.GREY }>Lunch</Li>
             <Li onClick={(evt)=>{
               scrollToAnchor("Entrée");
               this.changeMeal(MEAL.DINNER);
             }}active={this.state.currentMeal === MEAL.DINNER ? "black" : CSSCONST.GREY }>Dinner</Li>
             <Li onClick={(evt)=>{
               scrollToAnchor("Children");
               this.changeMeal(MEAL.CHILDREN);
             }} active={this.state.currentMeal === MEAL.CHILDREN ? "black" : CSSCONST.GREY }>Children</Li>
             <Li onClick={(evt)=>{
               this.changeMeal(MEAL.DESSERTS);
               scrollToAnchor("Daily Desserts");
             }} active={this.state.currentMeal === MEAL.DESSERTS ? "black" : CSSCONST.GREY }>Desserts</Li>
          
            <Li onClick={(evt)=>{
               this.changeMeal(MEAL.REFRESHMENTS);
               scrollToAnchor("Sparkling & Rose Wine");
             }}active={this.state.currentMeal === MEAL.REFRESHMENTS ? "black" : CSSCONST.GREY }>Refreshments</Li>
         

           </Ul>
           </div>
         </Side1Warper>
    }
}

export default MenuBar; 