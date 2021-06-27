import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../../../cssConst';



export const Side1Warper = styled.aside`
          font-family: ${CSSCONST.FONT_RAKKAS};
          font-size: 48px;
          width: 200px;

          display: flex;
          justify-content: flex-start;
          margin-right: 40px;
          flex-direction: column;
       

          @media only screen and (max-width: 961px){
           display: none;
    }
    @media only screen and (max-width: 1200px){
           font-size: 30px;
    }
`;

