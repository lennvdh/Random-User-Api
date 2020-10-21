import React, {useEffect, useState} from "react";
import Axios from "axios";
import styled from "styled-components";

const H1 = styled.h1`
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-size: 50px;
text-align: center;
`
const ProfilePic = styled.img`
margin-left: 690px;
margin-top: 100px;
border-radius: 50%;
border: 8px solid white;
z-index: 1;
position: relative;
`

const H4 = styled.h4`
margin-left: 50px;
`

const Div = styled.div`
    position: absolute;
    margin-top: -50px;
    margin-left: 530px;
    height: 790px;
    width: 400px;
    background-color: #1EA3C2;
    padding: 20px;
    z-index: -6;
    border-bottom-left-radius: 10%;
    border-bottom-right-radius: 10%;
`

export default function Fetch() {
    //Hooks
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [profilepicture, setProfilepicture] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [gsm, setGsm] = useState('');
    const [phone, setPhone] = useState('');
    const [nationaliteit, setNationaliteit] = useState('');
    const [registered, setRegistered] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [postcode, setPostcode] = useState('');
    const [streetname, setStreetname] = useState('');
    const [huisnumer, setHuisnumer] = useState('');
    const [username, setUsername] = useState('');


    const url = "https://api.randomuser.me/";


    const fetchingData = async () => {
        try {
            const res = await Axios.get(url)
            console.log(res.data.results[0]);
            setFirstname(res.data.results[0].name.first)
            setLastname(res.data.results[0].name.last)
            setProfilepicture(res.data.results[0].picture.large)
            setEmail(res.data.results[0].email)
            setBirthday(res.data.results[0].dob.date)
            setAge(res.data.results[0].dob.age)
            setGender(res.data.results[0].gender)
            setGsm(res.data.results[0].cell)
            setPhone(res.data.results[0].phone)
            setNationaliteit(res.data.results[0].nat)
            setRegistered(res.data.results[0].registered.date)
            setCity(res.data.results[0].location.city)
            setCountry(res.data.results[0].location.country)
            setPostcode(res.data.results[0].location.postcode)
            setStreetname(res.data.results[0].location.street.name)
            setHuisnumer(res.data.results[0].location.street.number)
            setUsername(res.data.results[0].login.username)
        }
        catch (e) {
            console.log("error:", e)
        }
    }

    useEffect(() => {
        fetchingData()
    }, [])




    return(
        <div>
            <ProfilePic src={profilepicture} alt={firstname}></ProfilePic>
            <Div>
                <H1>{firstname} {lastname}</H1>
                <H4>Email: {email}</H4>
                <H4>Geboorte datum: {birthday.slice(0, 10)}</H4>
                <H4>Leeftijd: {age}</H4>
                <H4>Gender: {gender}</H4>
                <H4>Gsm: {gsm}</H4>
                <H4>Tel: {phone}</H4>
                <H4>Nationaliteit: {nationaliteit}</H4>
                <H4>Registered: {registered.slice(0,10)}</H4>
                <H4>Stad: {city}</H4>
                <H4>Land: {country}</H4>
                <H4>Postcode: {postcode}</H4>
                <H4>Straat naam: {streetname}</H4>
                <H4>Huis Numer: {huisnumer}</H4>
                <H4>UserName: {username}</H4>
            </Div>             
        </div>
    )
}
