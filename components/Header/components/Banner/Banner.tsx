import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../../../cssConst';
import {Link} from 'react-router-dom';

const BannerBG = styled.div`
   background-color: ${CSSCONST.BLUE}; 
   width:100%;
   top:0;
   display: flex;
   justify-content:center;
   @media only screen and (max-width: 680px){
        display: flex;
        justify-content: flex-start;
    }
 

   `;
const BannerText = styled.div`
   display: flex;
   justify-content: space-between;
   width: 1200px;
   height: 54px;
   margin-left: 10px;
   font-style: italic;
   padding-bottom:6px;
   @media only screen and (max-width: 1217px){
        width: 800px;
    }
    @media only screen and (max-width: 1000px){
        width: 600px;
    }
  
    @media only screen and (max-width: 425px){
        width: 510px;
      
    }

`;
const Text= styled.div`
    color: white ;
    font-family: ${CSSCONST.FONT_ZILLA};
 
     height: 100%;
     width: fit-content;
    display: flex;
    align-items:flex-end;
     font-size: 18px;
`;


const Banner = (props:{onclick:()=>void})=>{
 
    return <BannerBG>
              <BannerText>
                  <Link style={{color:"white"}} to="/ABOUT" >
                  <Text onClick={(event)=>{
                      event.preventDefault;
                      props.onclick()}}>Book a Table</Text>
                  </Link>
                 <Text>1 Tasman Hwy, Bicheno TAS 7215 / Tel: (03) 6375 1121 </Text>
              </BannerText>
           </BannerBG>
}
export default Banner;