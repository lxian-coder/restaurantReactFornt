import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../../../../../cssConst';
import home1 from '../../../../assets/home1.jpeg';
import homePack1 from '../../../../../../assets/homepack1.jpeg';
import homePack2 from '../../../../../../assets/homepack2.jpg';
import homePack3 from '../../../../../../assets/homepack3.jpg';
import homePack4 from '../../../../../../assets/homePack4.jpeg';

const HomeP1Container = styled.div`
     display: flex;
     width: 100%;
     justify-content: space-between;
     font-family: ${CSSCONST.FONT_ZILLA};
   

     @media only screen and (max-width:700px){
       flex-wrap:wrap;
       justify-content: center;
     }
`;

const Side1 = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.div`
   font-size: 36px;
   display: flex;
`;
const TextArea = styled.div`
   font-size:24px;
`;

const Side2 = styled.div`
display: flex;
flex-direction: column;

`;

const PhotoLine = styled.div`
   display: flex;
   width: 80%;
`;
const Photo1 =styled.img`
   width:30% ;

`;
const Photo2 = styled.img`
     width: 70%;
`;
const Photo3 = styled.img`
      width: 60%;
`;
const Photo4 = styled.img`
      width: 40%;
`;
const Home1 = ()=>{

return <HomeP1Container>
        <Side1>
           <Title>Enjoy with Us Today<br/><br/><br/></Title>
           <TextArea>
           Please try our Selection of Tasmanian 
           Seafood and Produce with Wines Mainly From East Coast Tasmania, 
           which We are certian will satisfy your appetite.
           </TextArea>
        </Side1>
        <Side2>
             <PhotoLine>
                 <Photo1 src={homePack1}></Photo1>
                 <Photo2 src={homePack2}></Photo2>
             </PhotoLine>
             <PhotoLine>
                 <Photo3 src={homePack3}></Photo3>
                 <Photo4 src={homePack4}></Photo4>
             </PhotoLine>
        </Side2>
     </HomeP1Container>
};

export default Home1;