import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
    
return (

<img  src={props.Lisa}  style={{width: '200px'}} alt="profile" ></img>

)

};
Image.propTypes= {
    Lisa:PropTypes.string
    };

export default Image;