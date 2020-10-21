import React from 'react';
import styled from 'styled-components';


    const Div = styled.div`
    position: absolute;
    width: 100%;
    height: 1031px;
    background-color: rgba(25, 181, 254, 1);
    z-index: -10;
    `

export default function Background(){
    const reloadPage = () =>{
        window.location.reload();
    }

    return(
        <Div onClick={reloadPage}>
            
        </Div>
    )
}