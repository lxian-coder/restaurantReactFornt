import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../../../cssConst';
import FooterPart1 from '../../components/FooterP1/components/FooterPart1';
const FooterWarper1 = styled.div`
       display: flex;
       flex-direction: column;
       justify-content: center;
       width: min(100%,1100px);
`;

const FooterPartWarper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 1.2%;
    padding-bottom:1.2% ;
    padding-left: 5% ;
    padding-right: 5% ;
    font-family: ${CSSCONST.FONT_RAMMETTO};
    color:white;
`;
const FooterPartWarper2 = styled.div`
   display: flex;
   width: 100%;
   justify-content: space-between;
 
`;
const Name = styled.div`
     color:white;
     font-size: 15px;
`;

const Address = styled.div`
     color:white;
     font-size: 10px;
     margin-top: 10%;
`;
const Side1Warper = styled.div`
   display: flex;
   flex-direction:column;
   height: 100%;
   
`;

const Side2Warper = styled.div`
  height:200px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Side2Name = styled.div`
   font-size: 12px;
   ;
`;

const Side2Content= styled.div`
     font-size : 10px;

`;
const BottomText = styled.div`
       font-size : 10px;
       display: flex;
       justify-content: center;
       margin-top: 3%;
`;
const FooterP1 = ()=>{

return <FooterPartWarper>
           <FooterWarper1>
           <FooterPartWarper2>
           <Side1Warper>
            <Name>Sealife <br/> Restaurant</Name>
            <Address>1 Tasman Hwy,<br/> Bicheno TAS 7215</Address>
       </Side1Warper>

       <Side2Warper>
          <Side2Name>Opening Hours</Side2Name>
          <Side2Content>
          Breakfast <br/>
          8:00am-11:00pm <br />
          Wednesday to Sunday<br />
        </Side2Content>
          <Side2Content>
          Lunch <br/>
          11:00am-3:00pm <br />
          Wednesday to Sunday<br />
        </Side2Content>
        <Side2Content>
        Dinner<br/>
        5:00pm-Late<br/>
        Tuesday to Saturday<br/>
       </Side2Content>
       </Side2Warper>
       <FooterPart1></FooterPart1>
           </FooterPartWarper2>
     
           <BottomText>©Sealife Restaurant 2021 </BottomText>
           </FooterWarper1>
         
</FooterPartWarper>



       

}
     
export default FooterP1;
