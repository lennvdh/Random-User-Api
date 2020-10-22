import React from 'react';
import styled from 'styled-components';
import logo from "../assets/logo.jpg";

const Button = styled.button`
border-radius: 40%;
width: 100px;
height: 50px;
&:hover{
    box-shadow: 3px 3px 3px black;
}
&:active{
    background-color: red;
    transition: 1s;
    transform: rotate(360deg);
}
`

const Box = styled.div`
width: 300px;
height: 400px;
background-color: black;
&:hover{
    box-shadow: 5px 5px 5px red;
    transition: 5s;
    transform: rotate(360deg);
    background-color: cyan;
}
@media only screen and (max-width: 500px){
    background-color: red;
    &:hover{
        box-shadow: 5px 5px 5px black;
        transition:5s;
        background-color: green;
        transform: rotate(360deg);
        &:active{
            background-color: yellow;
            transform: rotate(90deg);
            box-shadow: 5px 5px 5px 10px maroon;
        }
    }
}
@media only screen and (min-width: 501px) and (max-width: 1000px){
    background-color: gray;
    &:hover{
        box-shadow: 5px 5px 5px #f59d5f;
        transition:5s;
        background-color: #ffe659;
        transform: rotate(360deg);
        &:active{
            background-color: #ddd;
            transform: rotate(90deg);
            box-shadow: 5px 5px 5px 10px #d56d56;
        }
    }
}
`
const ImgCanvas = styled.div`
height: 50px;
width: 50px;
`
const Img = styled.img`
width: 130px;
height: 150px;
object-fit: cover;
&:hover{  
    width: auto;
    height: auto;
    transition: 10s;
} 
`

const Title = styled.h1`
    font-family: 'Staatliches', cursive;
    color: rgba(44, 130, 201, 1);
    text-align: center;
    &:hover{
        color: rgba(137, 196, 244, 1);
        text-shadow: 2px 2px 2px black;
        transition: 20s;
        transform: translate(100%, 100%);
    }
`

const ThisIsText = styled.p`
margin: 100px;
color: rgba(30, 139, 195, 1);
&:hover{
    transition: 3s;
    font-size: 20px;
}
`

const StyledComponents = () => {
    
    const click = (e) =>{
        e.preventDefault();
        console.log('hehe');
    }


    return(
        <div>
            <Title>This is my title</Title>
            <Button onClick={click}>click me</Button>
            <Box/>
            <ThisIsText>dkfj kdjfkdjf kdjfkdj f djfkdjf jdfjdj djf djf kd kfjdfkjd djf</ThisIsText>
            <ImgCanvas>
                <Img src={logo} alt="logo"/>
            </ImgCanvas>
        </div>
    )
}

export default StyledComponents;