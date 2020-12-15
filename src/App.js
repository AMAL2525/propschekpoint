import React from 'react';
import Profile from './profile/Profile';
import Image from './profile/Image';

import './App.css';
const profile = {
  name: "Lisa Simpson",
  bio:' bit of a loner and social outcast. Lisa is a vegetarian, a strong environmentalist, a feminist, and a Buddhist.',
  profession: '2nd grade student at Springfield Elementary School'
  
}
const App = () => (

  <div className='App' style={{ backgroundColor: 'black' }}>
    <Image Lisa='Lisa.jpg' alt='Lisa' />
    <Profile fullName={profile.name} bio={profile.bio} profession={profile.profession} handelName={() => alert(profile.name)}>{Image}</Profile>
  </div>
);




export default App;
