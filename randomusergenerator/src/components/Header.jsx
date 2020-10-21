import React from 'react';
import styled from 'styled-components';
import banner from '../assets/banner.jpg'

const Div = styled.div`
height: 200px;
width: 100%;
position: absolute;
`
const Img = styled.img`
position: absolute;
height:100%;
width:100%;
z-index: -5;
`



export default function Header(){


    return(
        <Div>
            <Img src={banner} alt="web dev"/>
        </Div>
    )
}