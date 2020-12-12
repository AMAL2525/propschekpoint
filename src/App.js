import React from 'react';
import Profile from './profile/Profile';
import Image from './profile/Image';

import './App.css';
const profile = {
  name: "Lisa Simpson"
}
const App = () => (

  <div className='App' style={{ backgroundColor: 'black' }}>


    <Image Lisa='Lisa.jpg' alt='Lisa' />
    <Profile handelName={() => alert(profile.name)}  >{profile.name}</Profile>
    <Profile >Intelligent and passionate, Lisa Simpson, at eight years old, is the second child of Homer and Marge, the younger sister of Bart, and the older sister of Maggie. Lisa's high intellect and liberal political stance creates a barrier between her and other children her age; therefore she is a bit of a loner and social outcast. Lisa is a vegetarian, a strong environmentalist, a feminist, and a Buddhist.</Profile>
    <Profile back='white'>2nd grade student at Springfield Elementary School</Profile>




  </div>
);




export default App;
