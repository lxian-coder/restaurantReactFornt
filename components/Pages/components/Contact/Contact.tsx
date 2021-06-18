import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../../../cssConst';
import {Side1Warper} from '../Side1/Side1';
import {Side2Warper} from '../SIde2/Side2';
import ContactImg from '../../../../assets/contact.jpg';
import ContactMap from '../../../../assets/contactMap.jpg';
import {Line,ImgContainer,PageContainer,Iframe} from '../utils/Tools';

const ContactContainer = styled.div`

    max-width: 1200px;
    display: flex;
    justify-content: space-between;

`;
const TextContainer = styled.div`
display: flex;
  justify-content: space-between;
   width: 100%;

   font-family:${CSSCONST.FONT_RAKKAS};
   font-size: 22px;
`;
const TextContainer2 = styled.div`
     display: flex;
     flex-direction: column;
     height: 100%;
`;
const Title = styled.div`
   font-size: 22px;
`;
const Content = styled.div`
   font-size:20px;
`;
const EntryWarper = styled.div`
     margin-bottom: 25px;
`;
const GoogleMap = styled.iframe`
  width: 100%;
  border: none;
  height: 500px;
  box-shadow:0px 10px 6px 5px rgb(0 0 0 / 20%);
`;

const  Contact = ()=>{

 return    <PageContainer>
<Side1Warper>
              Contact.
            </Side1Warper>
            <Side2Warper >
                <ImgContainer src={ContactImg}></ImgContainer>
                <Line></Line>
                <TextContainer>
                
                <TextContainer2>
                    <EntryWarper>
                    <Title>Reservations:<br/>(03)6375 1121</Title>
                    </EntryWarper>
                     <EntryWarper>
                     <Title>GeneralEnquires:</Title>
                      <Content>sealifebicheno@gmail.com</Content>
                     </EntryWarper>
                     <EntryWarper>
                     <Title>Opening Hours:</Title>
                      <Content>Breakfast<br />8:00am-11:00am<br/>Wednesday to Sunday</Content>
                     </EntryWarper>
                     <EntryWarper>
                     <Content>Lunch<br />11:00am-3:00am<br/>Wednesday to Sunday</Content>
                     </EntryWarper>
                     <Content>Dinner<br />5:00am-Late<br/>Tuesday to Saturday</Content>
                </TextContainer2>
                <TextContainer2>
                    <EntryWarper>
                    <Title>Social:</Title>
                        <Title>Facebook</Title>
                        <Title>Trip advisor</Title>
                    </EntryWarper>
                    <EntryWarper>
                    <Title>Parking:</Title>
                        <Content>Free parking spaces are available outside the restaurant.</Content>
                    </EntryWarper>
                  <EntryWarper>
                  <Title>Location:</Title>
                        <Content>1 Tasman Hwy, Bicheno TAS 7215</Content>
                  </EntryWarper>
                </TextContainer2>
                </TextContainer>
                <Line></Line>
                 <GoogleMap  src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.940695511147!2d148.2966295165443!3d-41.87262238471123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa7142f2f635350d%3A0x29059c694902a1ec!2s1%20Tasman%20Hwy%2C%20Bicheno%20TAS%207215!5e0!3m2!1sen!2sau!4v1623832989408!5m2!1sen!2sau"}>
                 </GoogleMap>
               <Line />
                 <Iframe src={ContactMap}></Iframe>


        
            </Side2Warper>
 </PageContainer>
            
     

}



export default Contact; 