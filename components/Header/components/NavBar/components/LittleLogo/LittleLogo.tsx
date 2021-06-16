import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../../../../../cssConst';

const LittleLogo = styled.img`
     width:37px;
     height: 34px;
     position: relative;
     top:50%;
     @media only screen and (max-width:800px){
         top: 56%;
         width:36px;
         height: 33px;
     }

`;

export default LittleLogo;