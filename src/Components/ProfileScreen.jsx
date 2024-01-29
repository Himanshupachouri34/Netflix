import React from 'react'
import Nav from './Nav'
import {  useSelector } from 'react-redux'
import { authentication } from '../firestore';
import { useNavigate } from 'react-router-dom';
import '../Style/ProfileScreen.css'
import PlansScreen from './PlansScreen';

function ProfileScreen() {
const user = useSelector(state => state.user)
const navigate = useNavigate()
console.log(user);

const handleClick = () => {
  authentication.signOut()
  navigate('/')
}


  return (
    <div className='profileScreen'>
      <Nav/>
      
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
         
          <img 
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
          
          <div className="profileScreen_details">
            <h2> {user?.email} </h2>
        
          <div className="profileScreen_plans">
            <h3>Plans</h3>
            
            <PlansScreen/>

            <button
            onClick={handleClick} 
            className='profileScreen_signOut'>
              Sign Out
            </button>
          </div>
          
          </div>
       
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen