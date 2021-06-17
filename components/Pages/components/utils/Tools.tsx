import React from 'react';
import styled,{css} from 'styled-components';



export const Line = styled.hr`
   margin-top: 40px;
   margin-bottom: 40px;
`;


export const ImgContainer = styled.img`
      width: 100%;
      height: 483px;
      box-shadow:0px 10px 6px 5px rgb(0 0 0 / 20%);
`;

export const PageContainer = styled.div`
    width: 1200px;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 961px){
        display: flex;
        justify-content: center;
    }

`;



