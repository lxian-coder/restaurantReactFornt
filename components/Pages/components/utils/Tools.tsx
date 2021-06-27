import React from 'react';
import styled,{css} from 'styled-components';



export const Line = styled.hr`
   margin-top: 3.125rem;
   margin-bottom: 3.125rem;
  
`;


export const ImgContainer = styled.img`
      width: 100%;
      max-height: 30.1875rem;
      box-shadow:0px 10px 6px 5px rgb(0 0 0 / 20%);
`;

export const PageContainer = styled.div`
    width: min(100%,68.75rem);
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
  max-height: 31.25rem;
  box-shadow:0px 10px 6px 5px rgb(0 0 0 / 20%);
`;




