import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../../../cssConst';
import {Side1Warper} from '../Side1/Side1';
import {Side2Warper} from '../SIde2/Side2';
import {Line,ImgContainer,PageContainer,Iframe} from '../utils/Tools';
import FetchData from './components/FetchData/FetchData';



const Title = styled.div`
   padding-bottom: 40px;
   font-size: 48px;

`;
const TitleText = styled.p`
   font-family: ${CSSCONST.FONT_RAKKAS};
   font-size:24px;
   display: flex;
   width: 180px;
   flex-wrap: wrap;
   height: fit-content;

`;
const TextTile = styled.div`
  font-family: ${CSSCONST.FONT_ALATA};
  font-size: 36px;
  margin-bottom: 20px;
`;
const Text = styled.div`
  font-family: ${CSSCONST.FONT_ALATA};
  font-size: 22px;
`;
const Events = ()=>{
      return <PageContainer>
               <Side1Warper>
                 <div style={{position:"fixed",width:"100%"}}>
                      <Title>Upcoming <br/>Events.</Title>
                      <TitleText>
                      See what’s happening at Sealife! Check back often to learn about exciting menu updates, new wine, special events, and more.
                   
                      </TitleText>
                 </div>
               </Side1Warper>
              <Side2Warper>
                   <FetchData></FetchData>
                  <Line></Line>
                   <TextTile>Group dining and Functions</TextTile>
                   <Text>At Sealife we are available for private functions such as Weddings, Birthday Celebrations and any other important occasion. We also provide a Degustation Option for smaller groups giving a more private and personal experience.
To learn more about our fabulous food and beverages whilst taking in the magnificent view of Waubs Bay, Phone us on (03)63751121.</Text>
            
              </Side2Warper>
      </PageContainer>

};

export default Events;
