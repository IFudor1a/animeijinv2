import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";

const Error = () => {
    const Navigate = useNavigate();
    return (
        <div className='error'>
            <div className='error_container'>
                <div className='error_logo'>
                    <Link to='/' className='error_close'/>
                </div>
                <h1>Oops!</h1>
                <h2>404 Not Found</h2>
                <p>Sorry, an error has occurred, Requested page not found!</p>
                <div className='error_actions'>
                    <Button variant='primary' className='error_button' onClick={() => Navigate('/', {replace:true})}>Take Me Home</Button>
                    <Button variant='danger' className='error_button' onClick={() => Navigate('/', {replace:true})}>Contact Support</Button>
                </div>
            </div>
        </div>
    );
};

export default Error;