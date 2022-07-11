import styled from "styled-components";

export const ProductContent = styled.div`
    width:300px;
    height:450px;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:6vh;

    img{
        min-width:200px;
        max-width:200px;
        min-height:300px;
        max-height:300px;
    }
    button{
        width:70%;
        height:5vh;
        border-style:none;
        background-color:yellow;
        
        :hover{
            cursor:pointer;
        }
    }
`