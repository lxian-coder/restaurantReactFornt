import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../../../../cssConst';
const FooterPart1Warper =styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 70%;
        @media only screen and (max-width: 550px){
        
       display: none;
       
    }
`;
const TextContainer = styled.div`
        display: flex;
        justify-content: space-between;
       font-size: 12px;
       font-family:${CSSCONST.FONT_RAMMETTO};
`;
const Warper = styled.div`
       margin-left: 6px ;
`;
const BottomText = styled.div`
      font-size: 10px;
      font-family:${CSSCONST.FONT_RAMMETTO};
`;


const FooterPart1 = ()=>{
   return  <FooterPart1Warper>
          <TextContainer>
            <Warper>
            <div>Resdrvation</div>
             <div>(03)6375 1121</div>
            </Warper>
           <Warper>
           <div>Social</div>
             <div>Facebook<br/>Trip Advisor</div>
           </Warper>
         </TextContainer>
   <BottomText>
      Morning and Afternoon Tea Available <br/>
     Takeaway Coffee Available at Window
   </BottomText>
   </FooterPart1Warper>

}

export default FooterPart1;