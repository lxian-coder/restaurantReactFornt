import React from 'react';
import styled,{css} from 'styled-components';



export const Line = styled.hr`
   margin-top: 50px;
   margin-bottom: 50px;
  
`;


export const ImgContainer = styled.img`
      width: 100%;
      max-height: 483px;
      box-shadow:0px 10px 6px 5px rgb(0 0 0 / 20%);
`;

export const PageContainer = styled.div`
    width: min(100%,1100px);
    display: flex;
    justify-content: space-between;
    min-height: 450px;
    @media only screen and (max-width: 961px){
        display: flex;
        justify-content: center;
    }
`;

 export const Iframe = styled.iframe`
  width: 100%;
  border: none;
  max-height: 500px;
  box-shadow:0px 10px 6px 5px rgb(0 0 0 / 20%);
`;




