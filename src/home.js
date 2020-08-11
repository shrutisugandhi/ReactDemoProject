import React from 'react';
import logo from './logo.svg';
import './App.css';

const user={
    firstname:'james',
    lastname:'bond'

}
function getfullname(user){
    return user.firstname+' '+user.lastname;
}
function Home(){
    return(
        <div>
            <h1>Home Page call Inside App.js</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome , {getfullname(user)} </h2>
        </div>
    );
}
export default Home;