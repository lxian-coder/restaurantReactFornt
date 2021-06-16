import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../../../../../cssConst';

const ItemName = styled.div`
     
        display: flex;
        align-items: flex-end;
        justify-content: center;
        text-decoration: none;
        color: black;
        letter-spacing: 0.7px;
        height: 75%;
        font-style: italic;
        &:hover{
            color:${CSSCONST.BLUE};
        }
        &:active{
            color:lightblue;
        }
        &::after{
             content: " ";
             width: 100%; 
             height: 2.2px;
             border-radius: 10px;
             position: absolute;
             top: 100%;
             left:0;
            transform:scale(0);
            transition: all 0.4s ease; 
            transform-origin: center;
        }
        &:hover::after{
           transform:scale(1.1);
        }
        margin-left: 1.3rem;
`;

const Item =(props:{children:string}) =>{

    return <ItemName >{props.children}</ItemName>;
}
export default Item;

