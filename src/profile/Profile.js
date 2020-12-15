import React from 'react';
import PropTypes from 'prop-types';
const Profile = (props) => {
        
        return (
        <div style={{backgroundColor: 'green' , margin:'5px auto', padding:'10px', width:'300px'}}>
                {props.handleName}
               
        <p> {props.fullName} </p>
                <p> {props.bio} </p>
                <p> {props.profession} </p>
                <img src={props.children} />
        
        </div>
        )
};
Profile.propTypes = {
        handelName:PropTypes.func

};
export default Profile;
