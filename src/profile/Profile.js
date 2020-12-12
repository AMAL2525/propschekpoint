import React from 'react';
import PropTypes from 'prop-types';
const Profile = (props) => {
        
        return (
        <div onClick={props.handelName} style={{backgroundColor: 'green' , margin:'5px auto', padding:'10px', width:'300px'}}>
               
        <p> {props.children} </p>
        
        </div>
        )
};
Profile.propTypes = {
        handelName:PropTypes.func

};
export default Profile;