import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../cssConst';
import Contact from './components/Contact/Contact';

const PageWarper = styled.div`
     display: flex;
     justify-content: center;
     z-index: 0;
     margin-top: 270px;

     `;

const Pages =()=>{
     
   return <PageWarper>
            
             <Contact></Contact>
        
       </PageWarper>
   

}
export default Pages;
