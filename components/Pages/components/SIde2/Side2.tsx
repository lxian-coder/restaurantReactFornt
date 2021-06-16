import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../../../cssConst';


export const Side2Warper = styled.aside`
        display: flex;
        flex-direction:column;
        justify-content: center;
        width: 850px;
        @media only screen and (max-width: 1145px){
        max-width: 750px;
    }
    @media only screen and (max-width: 826px){
        max-width: 700px;
    }
    @media only screen and (max-width: 726px){
        max-width: 600px;
    }
         
`;