import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../../../cssConst';
import {Link} from 'react-router-dom';

const BannerBG = styled.div`
   background-color: ${CSSCONST.BLUE}; 
   width: 100%;
   top:0;
   display: flex;
   justify-content:center;
   height: 3.375rem;
   `;
const BannerText = styled.div`
   display: flex;
   justify-content: space-between;
   height: 54px;
   margin-left: 2rem;
   font-style: italic;
   padding-bottom:6px;
   width: min(100%,68.75rem);
   margin-right: 0.4rem;

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
                  <Link style={{color:"white"}} to="/CONTACT" >
                  <Text onClick={(event)=>{
                      event.preventDefault;
                      props.onclick()}}>Book a Table</Text>
                  </Link>
                 <Text>1 Tasman Hwy, Bicheno TAS 7215 / Tel: (03) 6375 1121 </Text>
              </BannerText>
           </BannerBG>
}
export default Banner;