import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../cssConst';
import FooterP1 from './components/FooterP1/FooterPart';


const FooterContainer = styled.footer`
      background-color: ${CSSCONST.BLUE};
      box-shadow: 0px -1px 6px 0.1px #ccc;
      width: 100%;
      margin-top: 3%;
`;

const Footer = ()=>{

    return <FooterContainer>
             <FooterP1></FooterP1>
    </FooterContainer>;
};

export default Footer;