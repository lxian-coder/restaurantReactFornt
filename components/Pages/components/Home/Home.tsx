import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../../../cssConst';
import {Side1Warper} from '../Side1/Side1';
import {Side2Warper} from '../SIde2/Side2';
import ContactImg from '../../../../assets/contact.jpg';
import ContactMap from '../../../../assets/contactMap.jpg';
import {Line,ImgContainer,PageContainer,} from '../utils/Tools';
import home1 from '../../../../assets/home1.jpeg';
import Home1 from './components/Homep1/Homep1';
import Home2 from './components/Homep2/Homep2';


const YoutubeVideo = styled.iframe`
   width: 100%;
   height:680px;
   border:0;
   box-shadow:0px 10px 6px 5px rgb(0 0 0 / 20%);
`;
const HomeContainer = styled.div`
    width: 100%;
   display: flex;
   justify-content: space-between;
   flex-direction: column;
`;
const HomeImage = styled.img`
     width: 100%;
     height: 680px;
     border: 0;
     box-shadow:0px 10px 6px 5px rgb(0 0 0 / 20%);
`;

const Home = ()=>{

    return <PageContainer>
                <HomeContainer>
                <YoutubeVideo src="https://www.youtube.com/embed/XCklCCw3YU8?t=1"></YoutubeVideo>
                 <Line></Line>
                 <HomeImage src={home1}></HomeImage>
                 <Line></Line>
                 <Home1></Home1>
                 <Line></Line>
                 <Home2></Home2>
                </HomeContainer>
    </PageContainer>;
}

export default Home;